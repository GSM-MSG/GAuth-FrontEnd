import * as S from './style';
import * as SVG from '../../../public/svg';
import { useEffect, useState } from 'react';
import { API } from '../../lib/API';
import { useRouter } from 'next/router';

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
          <>
            <h2>
              회원가입이 완료되었습니다!
              <br />
              <br />
              관리자 승인을 기다려 주세요!
            </h2>
          </>
        ) : (
          <>
            {emailErrorCheck ? (
              <>
                <h2>인증 메일이 전송되었습니다!</h2>
                <p>
                  전송된 메일에서 <span>인증 버튼</span>을 눌러 인증을
                  완료해주세요
                </p>
                <SVG.Mail />
              </>
            ) : (
              <>
                <h2>인증 버튼을 확인해주세요</h2>
                <SVG.OopsIcon />
              </>
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
