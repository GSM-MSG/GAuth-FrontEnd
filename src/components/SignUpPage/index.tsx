import React, { useRef, useState } from 'react';
import VerifyEmail from '../VerifyEmail';
import PrivacyConsent from './PrivacyConsent';
import * as S from './style';
import * as SVG from '../../../public/svg';
import WaveWrapper from './WaveWrapper';
import * as Util from '../../util';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import API from '../../api';
import { useRouter } from 'next/router';
import { client_id, redirect_uri } from '../../lib/OauthQuery';

export default function SignUpPage() {
  const formDefaultValues = {
    email: '',
    pw: '',
    emailCheck: false,
    pwCheck: false,
    privacyCheck: false,
    privacyConsent: false,
    changeForm: false,
    img: '',
    verifyEmail: false,
  };
  const [loading, setLoading] = useState(false);
  const signUpRef = useRef<HTMLDivElement>(null);
  const [profileImg, setProfileImg] = useState<FileList>();
  const { register, watch, setValue, setFocus, reset } = useForm({
    defaultValues: formDefaultValues,
  });
  const router = useRouter();

  const resetStateHandler = () => {
    reset(formDefaultValues);
  };

  const handleFiles = (files: FileList) => {
    if (!files[0] || !files[0].type.startsWith('image/')) return;
    setProfileImg(files);
    const getB64Data = new Util.FileConverter();
    getB64Data.onReadEnd = () => setValue('img', getB64Data.b64Data);
    getB64Data.readFiles(files);
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
    if (loading) return;
    try {
      setLoading(true);
      const { request } = await API.post('/email', {
        email: watch('email') + '@gsm.hs.kr', // 정규식 ^[a-zA-Z0-9]+@gsm.hs.kr$, 공백 미허용
      });
      if (request.status !== 204) return toast.error('다시 시도해 주세요.');
      setValue('verifyEmail', true);
    } catch (e) {
      if (!axios.isAxiosError(e)) return toast.error('unknown error');
      if (e.response?.status === 429)
        return toast.error('15분 동안 최대 3번 요청 가능합니다.');
      if (e.response?.status === 400) {
        resetStateHandler();
        return toast.error('이미 인증된 이메일 요청입니다. 15분 기다려주세요.');
      }
      if (e.response?.status === 500) return toast.error('error');
    } finally {
      setLoading(false);
    }
  };

  const onRouting = () => {
    router.push({
      pathname: '/login',
      query: {
        client_id: router.query[client_id],
        redirect_uri: router.query[redirect_uri],
      },
    });
  };

  return (
    <>
      <S.Layer>
        <WaveWrapper signUpRef={signUpRef} />
        <S.SignUpWrapper ref={signUpRef}>
          <S.Container>
            <S.SignUpContainer changeForm={watch('changeForm')}>
              <h1>SIGNUP</h1>
              <S.InputContainer>
                <S.InputWrapper>
                  <S.InputName being={watch('emailCheck')}>이메일</S.InputName>
                  <input
                    maxLength={6}
                    {...register('email', {
                      onChange(e) {
                        setValue(
                          'email',
                          e.target.value.replace(/[^a-zA-Z\d]/gi, '')
                        );
                      },
                      onBlur(e) {
                        !e.target.value && setValue('emailCheck', false);
                      },
                    })}
                    onFocus={() => {
                      setValue('emailCheck', true);
                    }}
                  />
                  <S.Email>@gsm.hs.kr</S.Email>
                </S.InputWrapper>
                <S.InputWrapper>
                  <S.InputName being={watch('pwCheck')}>비밀번호</S.InputName>
                  <input
                    type="password"
                    maxLength={72}
                    {...register('pw', {
                      onBlur(e) {
                        !e.target.value && setValue('pwCheck', false);
                      },
                    })}
                    onFocus={() => [setValue('pwCheck', true)]}
                  />
                </S.InputWrapper>
                <S.PrivacyConsent>
                  <input
                    type="checkbox"
                    checked={watch('privacyCheck')}
                    onChange={() => {
                      setValue('privacyCheck', !watch('privacyCheck'));
                    }}
                  />
                  <p>개인정보 수집 및 이용에 대한 동의</p>
                  <a onClick={() => setValue('privacyConsent', true)}>
                    자세히 보기
                  </a>
                </S.PrivacyConsent>
              </S.InputContainer>
              <S.ButtonContainer>
                <S.Submit
                  onClick={() => {
                    const reg_pw =
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&^#])[A-Za-z\d$@$!%*?&^#]{8,72}/;

                    if (/^.{0}$/.test(watch('email'))) {
                      toast.error('이메일 입력을 확인해주세요.');
                      setFocus('email');
                    } else if (!/^.{8,72}$/.test(watch('pw'))) {
                      toast.error(
                        '비밀번호의 길이는 8자 이상 72자 이하여야 합니다.'
                      );
                      setFocus('pw');
                    } else if (!reg_pw.test(watch('pw'))) {
                      toast.error(
                        '비밀번호는 대문자, 소문자, 숫자, 특수문자가 각각 1개 이상 포함해야 합니다.'
                      );
                      setFocus('pw');
                    } else if (!watch('privacyCheck')) {
                      toast.error(
                        '개인정보 수집 및 이용에 대해 동의해 주십시오.'
                      );
                    } else setValue('changeForm', true);
                  }}
                >
                  다음
                </S.Submit>
                <div>
                  <button type="button" onClick={onRouting}>
                    로그인
                  </button>{' '}
                  |{' '}
                  <a
                    onClick={() => {
                      toast.info('다음 버전에 추가될 예정');
                    }}
                  >
                    비밀번호 찾기
                  </a>
                </div>
              </S.ButtonContainer>
            </S.SignUpContainer>
            <S.SignUpContainer changeForm={watch('changeForm')}>
              <h1>PROFILE</h1>
              <S.UpLoadProfileContainter>
                <S.ProfileSVGWrapper>
                  <label
                    htmlFor="profile"
                    onDrop={dropHandler}
                    onDragOver={dragOverHandler}
                  >
                    {watch('img') ? (
                      <S.Profile src={watch('img')} />
                    ) : (
                      <SVG.ProfileFace />
                    )}
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
                    onChange={changeHandler}
                  />
                </S.ProfileSVGWrapper>
                <S.ProfileBtnWrapper>
                  <div>
                    <S.ChangeBtn
                      position="left"
                      onClick={() => setValue('changeForm', false)}
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
                  <button type="button" onClick={onRouting}>
                    로그인
                  </button>{' '}
                  |{' '}
                  <a
                    onClick={() => {
                      toast.info('다음 버전에 추가될 예정');
                    }}
                  >
                    비밀번호 찾기
                  </a>
                </S.ProfileBtnWrapper>
              </S.UpLoadProfileContainter>
            </S.SignUpContainer>
          </S.Container>
        </S.SignUpWrapper>
      </S.Layer>
      {watch('privacyConsent') && (
        <PrivacyConsent closeHandle={() => setValue('privacyConsent', false)} />
      )}
      {watch('verifyEmail') && (
        <VerifyEmail
          email={watch('email')}
          pw={watch('pw')}
          profileImg={profileImg}
          resetStateHandler={() => resetStateHandler()}
        />
      )}
    </>
  );
}
