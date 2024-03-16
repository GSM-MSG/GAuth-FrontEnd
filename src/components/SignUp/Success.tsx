import { useResetModal } from '../../hooks/useResetModal';
import { SubmitWrapper } from '../common/Auth/style';
import CreateTitle from '../common/CreateTitle';
import * as S from './style';
import * as SVG from '../../../public/svg';

export default function Success() {
  const { changeModalType } = useResetModal();

  return (
    <>
      <CreateTitle title={'회원가입'} logo={true} />
      <S.SuccessWrapper>
        <h1>회원가입 요청을 보냈습니다.</h1>
        <p>관리자의 승인을 기다려주세요.</p>
      </S.SuccessWrapper>
      <S.DetailWrapper>
        <h1>문의</h1>
        <div>
          <SVG.Discord />
          <p>seojumee</p>
        </div>
        <div>
          <SVG.Mail2 />
          <p>matsougeum@gmail.com</p>
        </div>
      </S.DetailWrapper>
      <S.ConfirmWrapper>
        <button onClick={() => changeModalType('/login')}>확인</button>
      </S.ConfirmWrapper>
    </>
  );
}
