import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { EmailInfo, ModalPage } from '../../../Atom/Atoms';
import CreateTitle from '../CreateTitle';
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
  const router = useRouter();
  const setModalPage = useSetRecoilState(ModalPage);
  const [emailInfo, setEmailInfo] = useRecoilState(EmailInfo);
  const [error, setError] = useState('');

  const changeModalType = () => {
    if (!changeModal) return;
    setModalPage(0);
    router.push(changeModal);
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
            type="password"
            label={`${newPassword ? '새' : ''} 비밀번호`}
            errors={!!errors.password}
            register={register('password', {
              required: '비밀번호를 입력하지 않았습니다',
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,72}/,
                message: 'GSM메일 형식에 맞게 입력해주세요',
              },
              maxLength: 72,
            })}
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
          {bottomPhrase && <p onClick={changeModalType}>{bottomPhrase}</p>}
        </SubmitWrapper>
      </Form>
    </>
  );
}
