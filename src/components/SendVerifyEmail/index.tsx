import * as S from './style';
import { useEffect, useState } from 'react';
import { API } from '../../lib/API';
import { useRouter } from 'next/router';
import ApproveEmailModal from './ApproveEmailModal';
import SuccessEmailCheckModal from './SuccessEmailCheckModal';
import FailEmailCheckModal from './FailEmailCheckModal';

export default function SendVerifyEmail({
  email,
  pw,
  profileImg,
}: {
  email: string;
  pw: string;
  profileImg?: FileList;
}) {
  const [checkEmail, setCheckEmail] = useState(false);
  const [emailErrorCheck, setEmailErrorCheck] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const SingUp = async (data?: string) => {
      try {
        const { request } = await API.post('/auth/signup', {
          email: email + '@gsm.hs.kr',
          password: pw,
          profileUrl: typeof data == 'string' ? data : null,
        });
        if (request.status == 201) {
          setTimeout(() => {
            router.push('/login');
          }, 2500);
        }
      } catch (e) {
        alert('다시 시도해주세요');
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
        alert('다시 시도해주세요');
      }
    };
    if (checkEmail) profileImg ? GetImgURL() : SingUp();
  }, [checkEmail, email, pw, profileImg, router]);

  const CheckEmail = async () => {
    try {
      const { request } = await API.get('/email', {
        params: { email: email + '@gsm.hs.kr' },
      });
      if (request.status == 200) setCheckEmail(true);
      else setEmailErrorCheck(request.status);
    } catch (e) {
      setEmailErrorCheck(false);
    }
  };

  return (
    <S.Layer>
      <S.Wrapper check={checkEmail}>
        {checkEmail ? (
          <ApproveEmailModal />
        ) : (
          <>
            {emailErrorCheck ? (
              <SuccessEmailCheckModal />
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
