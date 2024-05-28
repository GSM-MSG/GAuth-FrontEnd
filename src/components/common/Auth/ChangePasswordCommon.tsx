import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useResetModal } from '../../../hooks/useResetModal';
import { passwordRegex } from '../../../lib/Regex';
import CreateTitle from '../CreateTitle';
import * as SVG from '../../../../public/svg';
import Input from '../Input';
import { Form, InputWrapper, SubmitWrapper } from './style';
import useFetch from '../../../hooks/useFetch';

interface Props {
  title?: string;
  newPassword?: boolean;
  submitBtn?: string;
  bottomPhrase?: string;
  changeModal?: string;
  onSubmit?: (data: { password: string; rePassword: string }) => void;
}
export default function ChangePasswordCommon({
  title,
  submitBtn
}: Props) {
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkrePassword, setCheckrePassword] = useState(false);

  const { changeModalType } = useResetModal();

  const {
    watch,
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<{
    password: string;
    rePassword: string;
    checkrepassword: string;
  }>({
    shouldUseNativeValidation: true,
  });

  const { fetch } = useFetch({
    url: '/auth/password',
    method: 'patch',
    onSuccess: () => {
      changeModalType('/login');
    },
    successMessage: '비밀번호가 변경되었습니다',
    errorMessage: {
      401: '이메일 인증 기한이 만료 되었습니다.',
      400: '기존에 사용하거나 올바르지 않는 비밀번호 입니다.',
    },
  });

  const onSubmit = async (data: {
    password: string;
    rePassword: string;
    checkrepassword: string;
  }) => {
    fetch({
      password: data.password,
      newPassword: data.rePassword,
    });
  };

  return (
    <>
      <CreateTitle
        title={title}
        logo={true}
        subTitle={`기존 비밀번호와 새 비밀번호를 입력해주세요.`}
      />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Input
            maxLength={72}
            type={checkPassword ? undefined : 'password'}
            label={`기존 비밀번호`}
            errors={!!errors.password}
            message={errors.password?.message}
            register={register('password', {
              required: '비밀번호를 입력하지 않았습니다',
              onChange() {
                setCheckPassword(false);
              },
            })}
            fixed={
              watch('password') &&
              (checkPassword ? <SVG.CloseIcon /> : <SVG.OpenIcon />)
            }
            fixedHandle={() => {
              setCheckPassword((prev) => !prev);
            }}
          />

          <Input
            maxLength={72}
            type={checkrePassword ? undefined : 'password'}
            label={`새 비밀번호`}
            errors={!!errors.rePassword}
            message={errors.rePassword?.message}
            register={register('rePassword', {
              required: '비밀번호를 입력하지 않았습니다',
              pattern: {
                value: passwordRegex,
                message:
                  '영어,숫자,특수문자를 각각 하나 이상 포함한 8자 이상 72자 이하 형식을 맞춰주세요',
              },
              onChange() {
                setCheckrePassword(false);
              },
            })}
            fixed={
              watch('rePassword') &&
              (checkrePassword ? <SVG.CloseIcon /> : <SVG.OpenIcon />)
            }
            fixedHandle={() => {
              setCheckrePassword((prev) => !prev);
            }}
          />

          <Input
            maxLength={72}
            type={'password'}
            label={`새 비밀번호 재입력`}
            errors={!!errors.checkrepassword}
            message={errors.checkrepassword?.message}
            register={register('checkrepassword', {
              required: '비밀번호를 입력하지 않았습니다',
              validate: {
                passwordsMatch: (value) =>
                  value === getValues('rePassword') ||
                  '비밀번호가 일치하지 않습니다.',
              },
            })}
          />
        </InputWrapper>
        <SubmitWrapper>
          <button type="submit">{submitBtn}</button>
        </SubmitWrapper>
      </Form>
    </>
  );
}
