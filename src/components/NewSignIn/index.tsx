import CreateTitle from '../common/CreateTitle';
import Input from '../common/Input';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import * as Type from '../../types';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { isAxiosError } from 'axios';
import API from '../../api';
import * as S from './style';
import { client_id, redirect_uri } from '../../lib/OauthQuery';
import TokenManager from '../../api/TokenManger';
import { useResetModal } from '../../hooks/useResetModal';
import { passwordRegex } from '../../lib/Regex';
import { useAutoLogin } from '../../hooks/useAutoLogin';

export default function NewSignInPage() {
  const router = useRouter();
  const { changeModalType } = useResetModal();
  const isQuery =
    router.query[client_id] !== undefined &&
    router.query[redirect_uri] !== undefined;
  const [serviceName, setServiceName] = useState('');
  const [error, setError] = useState('');
  const { checkAuto } = useAutoLogin(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Type.LoginFormProps>({
    shouldUseNativeValidation: true,
  });

  useEffect(() => {
    const autoOauth = async () => {
      try {
        const { data } = await API.post('/oauth/access');
        if (isQuery)
          return router.replace(
            `${router.query.redirect_uri}?code=${data.code}`
          );
      } catch (e) {
        console.log(e);
      }
    };

    const getService = async () => {
      try {
        const { data } = await API.get(`/oauth/${router.query.client_id}`);
        setServiceName(data.serviceName);
        if (checkAuto) toast.info('백엔드 개발중이에요.');
        //  autoOauth();
      } catch (e) {
        if (isAxiosError(e) && e.response!.status === 404) {
          toast.error('해당하는 서비스가 없습니다.');
          router.back();
        } else {
          toast.error('예기치 못한 오류가 발생하였습니다.');
        }
      }
    };

    if (!router.isReady || checkAuto === undefined) return;
    if (isQuery) {
      getService();
    } else {
      checkAuto ? router.push('/') : '';
    }
    return;
  }, [checkAuto, isQuery, router]);

  const onSubmit = async (inputs: Type.LoginFormProps) => {
    try {
      const tokenManager = new TokenManager();
      const { data } = await API.post(isQuery ? '/oauth/code' : '/auth', {
        email: inputs.email + '@gsm.hs.kr',
        password: inputs.password,
      });

      if (isQuery)
        return router.replace(`${router.query.redirect_uri}?code=${data.code}`);
      tokenManager.setToken(data);
      API.defaults.headers.common['Authorization'] =
        'Bearer ' + data.accessToken;
      router.replace('/');
    } catch (e) {
      if (!isAxiosError(e))
        return setError('예기치 못한 오류가 발생하였습니다.');
      if (e.response?.status === 400 || e.response?.status === 404)
        setError('이메일 또는 비밀번호가 일치하지 않습니다..');
      if (e.response?.status === 403) setError('관리자의 승인이 필요합니다');
    }
  };

  return (
    <S.Layout>
      <S.Wrapper>
        <CreateTitle
          title={serviceName ? serviceName + '에 로그인' : '뭐든 단 한번으로'}
          logo={true}
          subTitle={serviceName ? '' : '저희 guath가 처음이신가요?'}
          option={serviceName ? '' : '회원가입'}
          onClick={() => changeModalType('/signUp')}
        />
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.InputWrapper>
            <Input
              label="이메일"
              fixed="@gsm.hs.kr"
              errors={!!errors.email}
              message={errors.email?.message}
              register={register('email', {
                required: '이메일을 입력하지 않았습니다',
                pattern: {
                  value: /^[a-zA-Z0-9]*$/g,
                  message: 'GSM메일 형식에 맞게 입력해주세요',
                },
              })}
            />
            <Input
              label="비밀번호"
              errors={!!errors.password}
              message={errors.password?.message}
              register={register('password', {
                required: '비밀번호를 입력하지 않았습니다',
                pattern: {
                  value: passwordRegex,
                  message:
                    '영어,숫자,특수문자를 각각 하나 이상 포함한 8자 이상 72자 이하 형식을 맞춰주세요',
                },
                maxLength: 72,
              })}
              type="password"
            />
            {error && <p>{error}</p>}
          </S.InputWrapper>
          <S.SubmitWrapper>
            <button type="submit">로그인</button>
            <p onClick={() => changeModalType('/newpsw')}>비밀번호 찾기</p>
          </S.SubmitWrapper>
        </S.Form>
      </S.Wrapper>
    </S.Layout>
  );
}
