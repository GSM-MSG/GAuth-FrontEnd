import * as S from './style';
import { useEffect, useState } from 'react';
import { API } from '../../lib/API';
import { useRouter } from 'next/router';
import ApproveEmailModal from './ApproveEmailModal';
import SuccessEmailCheckModal from './SuccessEmailCheckModal';
import FailEmailCheckModal from './FailEmailCheckModal';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

export default function VerifyEmail({
  email,
  pw,
  profileImg,
  resetStateHandler,
}: {
  email: string;
  pw: string;
  profileImg?: FileList;
  resetStateHandler: () => void;
}) {
  const [state, setState] = useState({
    emailApprove: false,
    signUpCheck: false,
    approveRequestCount: 0,
  });
  const router = useRouter();
  const { emailApprove, signUpCheck, approveRequestCount } = state;

  useEffect(() => {
    const SingUp = async (data?: string) => {
      try {
        const { request } = await API.post('/auth/signup', {
          email: email + '@gsm.hs.kr',
          password: pw,
          profileUrl: data ?? null,
        });
        if (request.status !== 201) return toast.error('error');
        setState((prev) => ({
          ...prev,
          signUpCheck: !signUpCheck,
        }));
        setTimeout(() => {
          router.push('/login');
        }, 1500);
      } catch (e) {
        if (!(e instanceof AxiosError)) return toast.error('unkonwn error');
        if (e.response?.status === 409) toast.error('이미 가입한 계정입니다');
        if (e.response?.status === 400)
          toast.error('이메일,비밀번호가 바르지 않습니다');
        resetStateHandler();
        setState({
          emailApprove: false,
          signUpCheck: false,
          approveRequestCount: 0,
        });
      }
    };

    const GetImgURL = async () => {
      try {
        const formData = new FormData();
        if (profileImg) formData.append('image', profileImg[0]);
        formData.append('email', email + '@gsm.hs.kr');
        const { data } = await API.patch('/auth/image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        SingUp(data.imageUrl);
      } catch (e) {
        toast.error('이미지 요청 실패');
      }
    };
    if (emailApprove) profileImg ? GetImgURL() : SingUp();
  }, [
    emailApprove,
    email,
    pw,
    profileImg,
    router,
    signUpCheck,
    setState,
    resetStateHandler,
  ]);

  const CheckEmail = async () => {
    try {
      const { request } = await API.get('/email', {
        params: { email: email + '@gsm.hs.kr' },
      });
      if (request.status !== 200)
        setState((prev) => ({
          ...prev,
          approveRequestCount: ++prev.approveRequestCount,
        }));
      setState((prev) => ({
        ...prev,
        emailApprove: !emailApprove,
      }));
    } catch (e) {
      setState((prev) => ({
        ...prev,
        approveRequestCount: ++prev.approveRequestCount,
      }));
      toast.error('이메일을 확인해 주세요');
    }
  };

  return (
    <S.Layer>
      <S.Wrapper check={emailApprove}>
        {emailApprove ? (
          signUpCheck ? (
            <SuccessEmailCheckModal />
          ) : (
            <p>회원가입 실패</p>
          )
        ) : (
          <>
            {approveRequestCount === 0 ? (
              <ApproveEmailModal />
            ) : (
              <FailEmailCheckModal />
            )}
            <button type="button" onClick={() => CheckEmail()}>
              확인
            </button>
          </>
        )}
      </S.Wrapper>
    </S.Layer>
  );
}
