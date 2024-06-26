import { useResetModal } from '../../hooks/useResetModal';
import { SubmitWrapper } from '../common/Auth/style';
import CreateTitle from '../common/CreateTitle';
import * as S from './style';
import * as SVG from '../../../public/svg';
import Detail from '../common/Detail';

export default function Success() {
  const { changeModalType } = useResetModal();

  return (
    <>
      <CreateTitle title={'회원가입'} logo={true} />
      <S.SuccessWrapper>
        <h1>회원가입 요청을 보냈습니다.</h1>
        <p>관리자의 승인을 기다려주세요.</p>
      </S.SuccessWrapper>
      <Detail />
      <S.ConfirmWrapper>
        <button onClick={() => changeModalType('/login')}>확인</button>
      </S.ConfirmWrapper>
    </>
  );
}
