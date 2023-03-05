import { toast } from 'react-toastify';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import API from '../../../../api';
import { EmailInfo, ModalPage, ModalType } from '../../../../Atom/Atoms';
import { Form, SubmitWrapper } from '../../style';
import * as S from './style';

export default function VerifyEmail() {
  const setModalType = useSetRecoilState(ModalType);
  const setModalPage = useSetRecoilState(ModalPage);
  const emailInfo = useRecoilValue(EmailInfo);
  const changeModalType = (type: string) => {
    setModalPage(0);
    setModalType(type);
  };

  const checkEmail = async () => {
    try {
      await API.get('/email', {
        params: { email: emailInfo.email + '@gsm.hs.kr' },
      });

      setModalPage((prev) => ++prev);
    } catch (e) {
      toast.error('이메일을 확인해 주세요.');
    }
  };

  return (
    <Form onSubmit={checkEmail}>
      <S.CheckingMessage>
        <h1>이메일로 인증링크를 보냈어요.</h1>
        <p>
          혹시 이메일이 안오셨다면 스팸 메일을
          <br /> 확인해주세요.
        </p>
      </S.CheckingMessage>
      <SubmitWrapper>
        <button type="submit">다음</button>
        <p onClick={() => changeModalType('signIn')}>로그인 하러가기</p>
      </SubmitWrapper>
    </Form>
  );
}
