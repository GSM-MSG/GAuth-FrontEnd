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
}: {
  email: string;
  pw: string;
  profileImg?: FileList;
}) {
  const [emailApprove, setEmailApprove] = useState(false);
  const [signUpCheck, setSignUpCheck] = useState(false);
  const [approveRequestCount, setApproveRequestCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const SingUp = async (data?: string) => {
      try {
        const { request } = await API.post('/auth/signup', {
          email: email + '@gsm.hs.kr',
          password: pw,
          profileUrl: data ?? null,
        });
        if (request.status !== 201) return toast.error('error');
        setSignUpCheck(true);
        setTimeout(() => {
          router.push('/login');
        }, 1500);
      } catch (e) {
        if (e instanceof AxiosError) {
          if (e.response?.status === 409) toast.error('이미 가입한 계정입니다');
          if (e.response?.status === 400)
            toast.error('이메일,비밀번호가 바르지 않습니다');
        }
        setTimeout(() => {
          router.reload();
        }, 3000);
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
  }, [emailApprove, email, pw, profileImg, router]);

  const CheckEmail = async () => {
    try {
      const { request } = await API.get('/email', {
        params: { email: email + '@gsm.hs.kr' },
      });
      if (request.status !== 200) setApproveRequestCount((prev) => ++prev);
      setEmailApprove(true);
    } catch (e) {
      setApproveRequestCount((prev) => ++prev);
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
