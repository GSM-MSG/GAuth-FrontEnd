import { useEffect, useRef, useState } from 'react';
import * as S from './style';
import SideWave from './SideWave';
import { accessToken, expiredAt, refreshToken } from '../../lib/Token';
import { useRecoilValue } from 'recoil';
import { ViewWidth } from '../../Atom/Atoms';
import { LoginLogo } from '../../../public/svg';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { LoginFormProps } from '../../types';
import API from '../../api';
import { client_id, redirect_uri } from '../../lib/OauthQuery';

export default function LoginPage() {
  const [serviceName, setServiceName] = useState<string>('');
  const [emailCheck, setEmailCheck] = useState<boolean>(false);
  const [pwCheck, setPwCheck] = useState<boolean>(false);
  const [loginTitleWidth, setLoginTitleWidth] = useState<number>(50);
  const viewWidth = useRecoilValue(ViewWidth);
  const router = useRouter();
  const serviceNameRef = useRef<HTMLSpanElement>(null);
  const isQuery =
    router.query.client_id !== undefined &&
    router.query.redirect_uri !== undefined;

  const { register, handleSubmit, getValues } = useForm<LoginFormProps>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const makeTitleSize = () => {
    setLoginTitleWidth(() => {
      if (window.innerWidth > 550) return 45;
      return (
        (window.innerWidth * 4) /
        5 /
        ((serviceNameRef.current?.innerText.length ?? 16) - 1)
      );
    });
  };

  useEffect(() => {
    makeTitleSize();
    addEventListener('resize', () => makeTitleSize());
  }, [serviceName, setServiceName, viewWidth]);

  useEffect(() => {
    if (!router.isReady) return;
    isQuery &&
      (async () => {
        try {
          const { data } = await API.get(`/oauth/${router.query.client_id}`);
          setServiceName(data.serviceName);
        } catch (e) {
          if (e instanceof AxiosError && e.response!.status === 404) {
            toast.error('해당하는 서비스가 없습니다.');
            router.back();
          } else {
            toast.error('예기치 못한 오류가 발생하였습니다.');
          }
        }
      })();
  }, [router.isReady, isQuery, router]);

  const onLogin = async (inputs: LoginFormProps) => {
    try {
      const { data } = await API.post(isQuery ? '/oauth/code' : '/auth', {
        email: inputs.email + '@gsm.hs.kr',
        password: inputs.password,
      });

      if (isQuery)
        return router.replace(`${router.query.redirect_uri}?code=${data.code}`);

      localStorage.setItem(accessToken, data.accessToken);
      localStorage.setItem(refreshToken, data.refreshToken);
      localStorage.setItem(expiredAt, data.expiresAt);
      API.defaults.headers.common['Authorization'] =
        'Bearer ' + data.accessToken;
      router.replace('/');
    } catch (e) {
      if (!(e instanceof AxiosError))
        return toast.error('예기치 못한 오류가 발생하였습니다.');
      if (e.response?.status === 400 || e.response?.status === 404)
        toast.warn('이메일 또는 비밀번호가 틀렸습니다.');
      if (e.response?.status === 403) toast.info('관리자의 승인이 필요합니다');
    }
  };

  const onError = (err: Object) => {
    return toast.warn(Object.values(err)[0].message);
  };

  const onRouting = () => {
    router.push(
      {
        pathname: '/signUp',
        query: {
          client_id: router.query[client_id],
          redirect_uri: router.query[redirect_uri],
        },
      },
      '/signUp'
    );
  };

  return (
    <S.Layer>
      <SideWave />
      {viewWidth >= 900 && (
        <S.TitleWrapper>
          <S.TitleBox>
            <LoginLogo />
            <div>
              <h1>GAUTH</h1>
              <h2>GSM 통합 계정관리 시스템</h2>
            </div>
          </S.TitleBox>
        </S.TitleWrapper>
      )}
      <S.LoginWrapper>
        <S.LoginContainer onSubmit={handleSubmit(onLogin, onError)}>
          {serviceName === '' ? (
            <h1>Login</h1>
          ) : (
            <S.LoginName width={loginTitleWidth}>
              <span>GAuth</span> 계정으로
              <br />
              <span ref={serviceNameRef}>{serviceName}에 로그인</span>
            </S.LoginName>
          )}
          <S.InputContainer>
            <S.InputWrapper>
              <S.InputName being={emailCheck}>이메일</S.InputName>
              <input
                {...register('email', {
                  required: '이메일을 입력하지 않았습니다',
                  pattern: {
                    value: /[a-zA-Z\d]/gi,
                    message: 'GSM메일 형식에 맞게 입력해주세요',
                  },
                  onBlur: () =>
                    getValues('email') === '' && setEmailCheck(false),
                })}
                onFocus={() => setEmailCheck(true)}
              />
              <S.Email>@gsm.hs.kr</S.Email>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.InputName being={pwCheck}>비밀번호</S.InputName>
              <input
                {...register('password', {
                  required: '비밀번호를 입력하지 않았습니다',
                  onBlur: () =>
                    getValues('password') === '' && setPwCheck(false),
                })}
                type="password"
                maxLength={72}
                onFocus={() => setPwCheck(true)}
              />
            </S.InputWrapper>
          </S.InputContainer>
          <S.ButtonContainer>
            <S.Submit type="submit">로그인</S.Submit>
            <div>
              <button type="button" onClick={onRouting}>
                회원가입
              </button>{' '}
              <span>l</span>{' '}
              <a onClick={() => toast.info('다음 버전에 추가할 예정')}>
                비밀번호 찾기
              </a>
            </div>
          </S.ButtonContainer>
        </S.LoginContainer>
      </S.LoginWrapper>
    </S.Layer>
  );
}
