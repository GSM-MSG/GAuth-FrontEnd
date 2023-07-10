import { toast } from 'react-toastify';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { EmailInfo, ModalPage } from '../../../Atom/Atoms';
import useFetch from '../../../hooks/useFetch';
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

  const { fetch: checkEmail } = useFetch({
    url: `/email?email=${emailInfo.email}@gsm.hs.kr`,
    method: 'get',
    onSuccess: () => setModalPage(2),
    onFailure: () => {
      toast.error('이메일을 확인해 주세요.');
    },
  });

  return (
    <>
      <CreateTitle title={title} logo={true} />
      <CheckingMessage>
        <h1>이메일로 인증링크를 보냈어요.</h1>
        <p>
          이메일이 오지 않았다면
          <br />
          스팸 메일함을 확인해 보세요!
        </p>
      </CheckingMessage>
      <SubmitWrapper>
        <button onClick={() => checkEmail()}>다음</button>
        <p onClick={() => changeModalType('/login')}>로그인 하러가기</p>
      </SubmitWrapper>
    </>
  );
}
