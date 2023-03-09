import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { ModalPage } from '../../Atom/Atoms';
import { SubmitWrapper } from '../common/Auth/style';
import CreateTitle from '../common/CreateTitle';
import * as S from './style';

export default function Success() {
  const router = useRouter();
  const setModalPage = useSetRecoilState(ModalPage);

  const changeModalType = (type: string) => {
    setModalPage(0);
    router.push(type);
  };
  return (
    <>
      <CreateTitle title={'회원가입'} logo={true} />
      <S.SuccessWrapper>
        <h1>회원가입 요청을 보냈습니다.</h1>
        <p>관리자의 승인을 기다려주세요.</p>
      </S.SuccessWrapper>
      <SubmitWrapper>
        <button onClick={() => changeModalType('/login')}>완료</button>
      </SubmitWrapper>
    </>
  );
}
