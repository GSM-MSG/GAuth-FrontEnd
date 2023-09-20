import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { EmailInfo } from '../../../Atom/Atoms';
import { useResetModal } from '../../../hooks/useResetModal';
import { passwordRegex } from '../../../lib/Regex';
import CreateTitle from '../CreateTitle';
import * as SVG from '../../../../public/svg';
import Input from '../Input';
import { Form, InputWrapper, SubmitWrapper } from './style';

interface Props {
  title?: string;
  newPassword?: boolean;
  submitBtn?: string;
  bottomPhrase?: string;
  changeModal?: string;
  onSubmit?: (data: { password: string; rePassword: string }) => void;
}

export default function NewPasswordCommon({
  title,
  newPassword,
  submitBtn,
  bottomPhrase,
  changeModal,
  onSubmit,
}: Props) {
  const [emailInfo, setEmailInfo] = useRecoilState(EmailInfo);
  const [error, setError] = useState('');
  const [checkPassword, setCheckPassword] = useState(false);
  const { changeModalType } = useResetModal();
  const setModalType = () => {
    if (!changeModal) return;
    changeModalType(changeModal);
  };

  const {
    watch,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ password: string; rePassword: string }>({
    shouldUseNativeValidation: true,
  });

  const setPassword = (data: { password: string; rePassword: string }) => {
    setEmailInfo({ ...emailInfo, ['password']: data.rePassword });
    if (onSubmit) onSubmit(data);
  };

  useEffect(() => {
    setError(errors.rePassword?.message || '');
  }, [errors]);

  return (
    <>
      <CreateTitle
        title={title}
        logo={true}
        subTitle={`${
          newPassword ? '새로' : ''
        } 사용하실 비밀번호를 입력해주세요.`}
      />
      <Form onSubmit={handleSubmit(setPassword)}>
        <InputWrapper>
          <Input
            type={checkPassword ? undefined : 'password'}
            label={`${newPassword ? '새' : ''} 비밀번호`}
            errors={!!errors.password}
            message={errors.password?.message}
            register={register('password', {
              required: '비밀번호를 입력하지 않았습니다',
              pattern: {
                value: passwordRegex,
                message:
                  '영어,숫자,특수문자를 각각 하나 이상 포함한 8자 이상 20자 이하 형식을 맞춰주세요',
              },
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
            type="password"
            label={`${newPassword ? '새' : ''} 비밀번호 재입력`}
            errors={!!errors.rePassword}
            register={register('rePassword', {
              required: true,
              validate: {
                checkPsw: (value) => {
                  if (value !== watch('password'))
                    return '비밀번호가 다릅니다.';
                  setError('');
                },
              },
            })}
          />
          {error && <p>{error}</p>}
        </InputWrapper>
        <SubmitWrapper>
          <button type="submit">{submitBtn}</button>
          {bottomPhrase && <p onClick={setModalType}>{bottomPhrase}</p>}
        </SubmitWrapper>
      </Form>
    </>
  );
}
