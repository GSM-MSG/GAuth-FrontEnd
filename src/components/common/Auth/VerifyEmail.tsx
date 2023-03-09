import { toast } from 'react-toastify';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import API from '../../../api';
import { EmailInfo, ModalPage } from '../../../Atom/Atoms';
import { useResetModal } from '../../../hooks/useResetModal';
import CreateTitle from '../CreateTitle';
import { CheckingMessage, SubmitWrapper } from './style';

interface Props {
  title?: string;
}

export default function VerifyEmail({ title }: Props) {
  const setModalPage = useSetRecoilState(ModalPage);
  const { changeModalType } = useResetModal();
  const emailInfo = useRecoilValue(EmailInfo);

  const checkEmail = async () => {
    try {
      const { request } = await API.get('/email', {
        params: { email: emailInfo.email + '@gsm.hs.kr' },
      });
      if (request.status === 200) {
        setModalPage(2);
      }
    } catch (e) {
      toast.error('이메일을 확인해 주세요.');
    }
  };

  return (
    <>
      <CreateTitle title={title} logo={true} />
      <CheckingMessage>
        <h1>이메일로 인증링크를 보냈어요.</h1>
        <p>
          혹시 이메일이 안오셨다면 스팸 메일을
          <br /> 확인해주세요.
        </p>
      </CheckingMessage>
      <SubmitWrapper>
        <button onClick={checkEmail}>다음</button>
        <p onClick={() => changeModalType('/login')}>로그인 하러가기</p>
      </SubmitWrapper>
    </>
  );
}
