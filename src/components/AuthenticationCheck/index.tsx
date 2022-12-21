import * as S from './style';
import * as SVG from '../../../public/svg';
import { useEffect, useState } from 'react';
import { API } from '../../lib/API';

export default function AuthenticationCheck({
  email,
  pw,
  profileImg = '',
}: {
  email: string;
  pw: string;
  profileImg?: FileList | string;
}) {
  const [checkEmail, setCheckEmail] = useState(false);

  useEffect(() => {
    const SingUp = async (data?: string) => {
      try {
        const { request } = await API.post('/auth/signup', {
          email: email + '@gsm.hs.kr',
          password: pw,
          profileUrl: typeof data == 'string' ? data : '',
        });
        if (request.status == 201) {
          setTimeout(() => {
            window.location.replace('/login');
          }, 2500);
        }
      } catch (e) {
        alert('다시 시도해주세요');
      }
    };

    const GetImgURL = async () => {
      try {
        const formData = new FormData();
        formData.append('image', profileImg[0]);
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
    if (checkEmail) typeof profileImg === 'string' ? SingUp() : GetImgURL();
  }, [checkEmail, email, pw, profileImg]);

  const CheckEmail = async () => {
    try {
      const { request } = await API.get('/email', {
        params: { email: email + '@gsm.hs.kr' },
      });
      setCheckEmail(request.status == 200 ? true : false);
    } catch (e) {
      alert('다시 시도해주세요');
    }
  };

  const BeforeConsent = () => {
    return (
      <>
        <h2>인증 메일이 전송되었습니다!</h2>
        <p>
          전송된 메일에서 <span>인증 버튼</span>을 눌러 인증을 완료해주세요
        </p>
        <SVG.Mail></SVG.Mail>
        <button type="button" onClick={() => CheckEmail()}>
          확인
        </button>
      </>
    );
  };

  const AfterConsent = () => {
    return (
      <>
        <h2>
          인증이 완료되었습니다!
          <br />
          <br />
          관리자 승인을 기다려 주세요!
        </h2>
      </>
    );
  };

  return (
    <S.Layer>
      <S.Wrapper check={checkEmail}>
        {checkEmail ? <AfterConsent /> : <BeforeConsent />}
      </S.Wrapper>
    </S.Layer>
  );
}
