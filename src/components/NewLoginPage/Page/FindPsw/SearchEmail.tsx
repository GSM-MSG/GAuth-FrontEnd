import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRecoilState, useSetRecoilState } from 'recoil';
import API from '../../../../api';
import { EmailInfo, ModalPage, ModalType } from '../../../../Atom/Atoms';
import Input from '../../../common/Input';
import { Form, InputWrapper, SubmitWrapper } from '../../style';

export default function SearchEmail() {
  const setModalType = useSetRecoilState(ModalType);
  const setModalPage = useSetRecoilState(ModalPage);
  const [emailInfo, setEmailInfo] = useRecoilState(EmailInfo);

  const changeModalType = (type: string) => {
    setModalPage(0);
    setModalType(type);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ email: string }>({
    shouldUseNativeValidation: true,
  });

  const searchEmail = async ({ email }: { email: string }) => {
    try {
      await API.post('/email', {
        email: email + '@gsm.hs.kr',
      });
      setEmailInfo({ ...emailInfo, ['email']: email });
      setModalPage((prev) => ++prev);
    } catch (e) {
      if (!(e instanceof AxiosError)) return toast.error('unkonwn error');
      if (e.response?.status === 429)
        return toast.error('15분 동안 최대 3번 요청 가능합니다.');
      if (e.response?.status === 400) {
        toast.info('이미 인증된 이메일 요청입니다.');
        return setModalPage(2);
      }
      if (e.response?.status === 500) return toast.error('error');
    }
  };

  return (
    <Form onSubmit={handleSubmit(searchEmail)}>
      <InputWrapper>
        <Input
          label="이메일"
          errors={!!errors.email}
          register={register('email', { required: true })}
        />
      </InputWrapper>
      <SubmitWrapper>
        <button type="submit">다음</button>
        <p onClick={() => changeModalType('signIn')}>로그인 하러가기</p>
      </SubmitWrapper>
    </Form>
  );
}
