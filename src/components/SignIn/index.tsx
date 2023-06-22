import CreateTitle from '../common/CreateTitle';
import Input from '../common/Input';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import * as Type from '../../types';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import * as S from './style';
import * as SVG from '../../../public/svg';
import { client_id, redirect_uri } from '../../lib/OauthQuery';
import TokenManager from '../../api/TokenManger';
import { useResetModal } from '../../hooks/useResetModal';
import { passwordRegex } from '../../lib/Regex';
import { useAutoLogin } from '../../hooks/useAutoLogin';
import useFetch from '../../hooks/useFetch';
import { OauthCode } from '../../types/API/OauthCode';
import { GetService } from '../../types/API/GetService';
import { TokenType } from '../../types';

export default function NewSignInPage() {
  const router = useRouter();
  const { changeModalType } = useResetModal();
  const isQuery =
    router.query[client_id] !== undefined &&
    router.query[redirect_uri] !== undefined;
  const [serviceName, setServiceName] = useState('');
  const [checkPassword, setCheckPassword] = useState(false);
  const [error, setError] = useState('');
  const { checkAuto } = useAutoLogin(false);

  const {
    watch,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Type.LoginFormProps>({
    shouldUseNativeValidation: true,
  });

  const { fetch: autoOauth } = useFetch<OauthCode>({
    url: '/oauth/code/access',
    method: 'post',
    onSuccess: (data) => {
      if (isQuery)
        router.replace(`${router.query.redirect_uri}?code=${data.code}`);
    },
    errorMessage: {
      401: '잘못된 유저 권한입니다.',
    },
  });

  const { fetch: getService } = useFetch<GetService>({
    url: `/oauth/${router.query.client_id}`,
    method: 'get',
    onSuccess: (data) => {
      setServiceName(data.serviceName);
      if (checkAuto) autoOauth();
    },
    onFailure: (e) => {
      if (e.response!.status === 404) {
        toast.error('해당하는 서비스가 없습니다.');
        router.back();
      }
    },
  });

  const { fetch: authLogin } = useFetch<OauthCode>({
    url: '/oauth/code',
    method: 'post',
    onSuccess: (data) => {
      router.replace(`${router.query.redirect_uri}?code=${data.code}`);
    },
    onFailure: (e) => {
      if (e.response?.status === 400)
        setError('이메일 또는 비밀번호가 일치하지 않습니다..');
      if (e.response?.status === 404) setError('해당 유저를 찾을 수 없습니다.');
      if (e.response?.status === 403) setError('관리자의 승인이 필요합니다.');
    },
  });

  const { fetch: login } = useFetch<TokenType>({
    url: '/auth',
    method: 'post',
    onSuccess: (data) => {
      const tokenManager = new TokenManager();

      tokenManager.setToken(data);
      router.replace('/');
    },
    onFailure: (e) => {
      if (e.response?.status === 400)
        setError('비밀번호가 일치하지 않습니다..');
      if (e.response?.status === 404) setError('해당 유저를 찾을 수 없습니다.');
      if (e.response?.status === 403) setError('관리자의 승인이 필요합니다.');
    },
  });

  useEffect(() => {
    if (!router.isReady || checkAuto === undefined) return;
    if (isQuery) {
      getService();
    } else {
      checkAuto && router.push('/');
    }
    return;
  }, [checkAuto, isQuery, router]);

  const onSubmit = async (inputs: Type.LoginFormProps) => {
    const data = {
      email: inputs.email + '@gsm.hs.kr',
      password: inputs.password,
    };

    isQuery ? authLogin(data) : login(data);
  };

  return (
    <S.Layout>
      <S.Wrapper>
        <CreateTitle
          title={serviceName ? serviceName + '에 로그인' : '뭐든 단 한번으로'}
          logo={true}
          subTitle={serviceName ? '' : '저희 gauth가 처음이신가요?'}
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
                onChange() {
                  setCheckPassword(false);
                },
              })}
              type={checkPassword ? undefined : 'password'}
              fixed={
                watch('password') &&
                (checkPassword ? <SVG.CloseIcon /> : <SVG.OpenIcon />)
              }
              fixedHandle={() => {
                setCheckPassword((prev) => !prev);
              }}
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
