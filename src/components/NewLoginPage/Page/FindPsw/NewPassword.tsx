import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import API from '../../../../api';
import { EmailInfo, ModalPage, ModalType } from '../../../../Atom/Atoms';
import Input from '../../../common/Input';
import { Form, InputWrapper, SubmitWrapper } from '../../style';

export default function NewPassword() {
  const setModalType = useSetRecoilState(ModalType);
  const setModalPage = useSetRecoilState(ModalPage);
  const emailInfo = useRecoilValue(EmailInfo);

  const [error, setError] = useState('');

  const changeModalType = (type: string) => {
    setModalPage(0);
    setModalType(type);
  };

  const {
    watch,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ password: string; rePassword: string }>({
    shouldUseNativeValidation: true,
  });

  const onSubmit = async (data: { password: string; rePassword: string }) => {
    try {
      await API.patch('/auth/password/initialize', {
        email: emailInfo.email + '@gsm.hs.kr',
        newPassword: data.rePassword,
      });
      setModalType('signIn');
      setModalPage(0);
    } catch (e) {
      if (!(e instanceof AxiosError)) return toast.error('unkonwn error');
    }
  };

  useEffect(() => {
    setError(errors.rePassword?.message || '');
  }, [errors]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Input
          type="password"
          label="새 비밀번호"
          errors={!!errors.password}
          register={register('password', { required: true })}
        />
        <Input
          type="password"
          label="새 비밀번호 재입력"
          errors={!!errors.rePassword}
          register={register('rePassword', {
            required: true,
            validate: {
              checkPsw: (value) => {
                if (value !== watch('password')) return '비밀번호가 다릅니다.';
                setError('');
              },
            },
          })}
        />
        {error && <p>{error}</p>}
      </InputWrapper>
      <SubmitWrapper>
        <button type="submit">완료</button>
        <p onClick={() => changeModalType('signIn')}>로그인 하러가기</p>
      </SubmitWrapper>
    </Form>
  );
}
