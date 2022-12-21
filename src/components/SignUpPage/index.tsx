import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import AuthenticationCheck from '../AuthenticationCheck';
import { API } from '../../lib/API';
import PrivacyConsent from './PrivacyConsent';
import * as S from './style';
import * as SVG from '../../../public/svg';
import WaveWrapper from './WaveWrapper';

export default function SignUpPage() {
  const signUpRef = useRef<HTMLDivElement>(null);

  const [email, setEmail] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const [emailCheck, setEmailCheck] = useState<boolean>(false);
  const [pwCheck, setPwCheck] = useState<boolean>(false);
  const [privacyCheck, setPrivacyCheck] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState<boolean>(false);
  const [changeForm, setChangeForm] = useState(false);
  const [img, setImg] = useState('');
  const [profileImg, setProfileImg] = useState<FileList>();
  const [data, setData] = useState(false);

  //프로필 추가 함수

  const handleFiles = (files: FileList) => {
    if (files[0].type.startsWith('image/')) {
      setProfileImg(files);
      const reader = new FileReader();
      reader.onloadend = () => {
        const { result } = reader;
        if (result) {
          setImg(result as string);
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(event.target.files!);
  };

  const dropHandler = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();

    handleFiles(event.dataTransfer.files);
  };

  const dragOverHandler = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const RequsetEmail = async () => {
    try {
      const { request } = await API.post('/email', {
        email: email + '@gsm.hs.kr', // 정규식 ^[a-zA-Z0-9]+@gsm.hs.kr$, 공백 미허용
      });
      if (request.status) {
        setData(true);
      }
    } catch (e) {
      alert('다시 시도해주세요');
    }
  };

  return (
    <>
      <S.Layer>
        <WaveWrapper signUpRef={signUpRef} />
        <S.SignUpWrapper ref={signUpRef}>
          <S.Container>
            <S.SignUpContainer changeForm={changeForm}>
              <h1>SIGNUP</h1>
              <S.InputContainer>
                <S.InputWrapper>
                  <S.InputName being={emailCheck}>이메일</S.InputName>
                  <input
                    name="email"
                    type="text"
                    maxLength={6}
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      !/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]|\s/g.test(e.target.value)
                        ? setEmail(e.target.value)
                        : '';
                    }}
                    onFocus={() => {
                      setEmailCheck(true);
                    }}
                    onBlur={() => {
                      !email && setEmailCheck(false);
                    }}
                  />
                  {email && (
                    <S.Email left={email.length * 13.5}>@gsm.hs.kr</S.Email>
                  )}
                </S.InputWrapper>
                <S.InputWrapper>
                  <S.InputName being={pwCheck}>비밀번호</S.InputName>
                  <input
                    name="pw"
                    type="password"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPw(e.target.value)
                    }
                    value={pw}
                    onFocus={() => {
                      setPwCheck(true);
                    }}
                    onBlur={() => {
                      !pw && setPwCheck(false);
                    }}
                  />
                </S.InputWrapper>
                <S.PrivacyConsent>
                  <input
                    type="checkbox"
                    onClick={() => {
                      setPrivacyCheck((prev) => !prev);
                    }}
                  />
                  <p>개인정보 수집 및 이용에 대한 동의</p>
                  <a onClick={() => setPrivacyConsent(true)}>자세히 보기</a>
                </S.PrivacyConsent>
              </S.InputContainer>
              <S.ButtonContainer>
                <S.Submit
                  onClick={() => {
                    if (/^.{0}$/.test(email)) {
                      alert('이메일 입력이 잘못 되었습니다.');
                      document.getElementsByName('email')[0].focus();
                    } else if (!/^.{8,72}$/.test(pw)) {
                      alert('암호의 길이는 8자 이상 72자 이하 입니다.');
                      document.getElementsByName('pw')[0].focus();
                    } else if (!privacyCheck) {
                      alert('개인정보 수집 및 이용에 대해 동의해 주십시오.');
                    } else setChangeForm(true);
                  }}
                >
                  다음
                </S.Submit>
                <div>
                  <Link href="/login">로그인</Link> |{' '}
                  <Link href="/find">비밀번호 찾기</Link>
                </div>
              </S.ButtonContainer>
            </S.SignUpContainer>
            <S.SignUpContainer changeForm={changeForm}>
              <h1>PROFILE</h1>
              <S.UpLoadProfileContainter>
                <S.ProfileSVGWrapper>
                  <label
                    htmlFor="profile"
                    onDrop={(e) => dropHandler(e)}
                    onDragOver={(e) => dragOverHandler(e)}
                  >
                    {img ? <S.Profile src={img} /> : <SVG.ProfileFace />}
                    <i>
                      <SVG.PlusBtn />
                    </i>
                  </label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    id="profile"
                    style={{ display: 'none' }}
                    onChange={(e) => changeHandler(e)}
                  />
                </S.ProfileSVGWrapper>
                <S.ProfileBtnWrapper>
                  <div>
                    <S.ChangeBtn
                      position="left"
                      onClick={() => setChangeForm(false)}
                    >
                      이전
                    </S.ChangeBtn>
                    <S.ChangeBtn
                      position="right"
                      onClick={() => {
                        RequsetEmail();
                      }}
                    >
                      다음
                    </S.ChangeBtn>
                  </div>
                  <Link href="/login">로그인</Link> |{' '}
                  <Link href="/find">비밀번호 찾기</Link>
                </S.ProfileBtnWrapper>
              </S.UpLoadProfileContainter>
            </S.SignUpContainer>
          </S.Container>
        </S.SignUpWrapper>
      </S.Layer>
      {privacyConsent && (
        <PrivacyConsent closeHandle={() => setPrivacyConsent(false)} />
      )}
      {data && (
        <AuthenticationCheck email={email} pw={pw} profileImg={profileImg} />
      )}
    </>
  );
}
