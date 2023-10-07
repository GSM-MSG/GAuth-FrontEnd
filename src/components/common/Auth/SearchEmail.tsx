import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { EmailInfo, ModalPage } from '../../../Atom/Atoms';
import useFetch from '../../../hooks/useFetch';
import { useResetModal } from '../../../hooks/useResetModal';
import CreateTitle from '../CreateTitle';
import Input from '../Input';
import { LightCube } from '../Loading';
import { Form, InputWrapper, Loading, SubmitWrapper } from './style';

interface Props {
  title?: string;
}

export default function SearchEmail({ title }: Props) {
  const { changeModalType } = useResetModal();
  const setModalPage = useSetRecoilState(ModalPage);
  const [emailInfo, setEmailInfo] = useRecoilState(EmailInfo);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ email: string }>({
    shouldUseNativeValidation: true,
  });

  const { fetch, isLoading } = useFetch({
    url: '/email',
    method: 'post',
    onSuccess: () => setModalPage(1),
    onFailure: (e) => {
      if (e.response?.status === 400) {
        toast.info('이미 인증된 이메일 요청입니다.');
        return setModalPage(2);
      }
    },
    errorMessage: {
      429: '동안 최대 3번 요청 가능합니다.',
      500: '예기치 못한 오류가 발생했습니다.',
    },
  });

  const searchEmail = async ({ email }: { email: string }) => {
    if (isLoading) return;
    setEmailInfo({ ...emailInfo, ['email']: email });
    fetch({ email: email + '@gsm.hs.kr' });
  };

  return (
    <>
      <CreateTitle
        title={title}
        logo={true}
        subTitle={'가입하실 이메일을 입력해주세요.'}
      />
      <Form onSubmit={handleSubmit(searchEmail)}>
        {isLoading ? (
          <Loading>
            <LightCube color="#00ccff" />
          </Loading>
        ) : (
          <InputWrapper>
            <Input
              label="이메일"
              errors={!!errors.email}
              register={register('email', {
                required: '이메일을 입력하지 않았습니다',
                pattern: {
                  value: /^[a-zA-Z0-9]*$/g,
                  message: 'GSM메일 형식에 맞게 입력해주세요',
                },
              })}
              fixed="@gsm.hs.kr"
            />
          </InputWrapper>
        )}
        <SubmitWrapper>
          <button type="submit">다음</button>
          <p onClick={() => changeModalType('/login')}>로그인 하러가기</p>
        </SubmitWrapper>
      </Form>
    </>
  );
}
