import { useRecoilValue } from 'recoil';
import { ModalType } from '../../Atom/Atoms';
import FindPsw from './Page/FindPsw';
import SignIn from './Page/SignIn';
import SignUp from './Page/SingUp';
import * as S from './style';

export default function LoginPage() {
  const modalType = useRecoilValue(ModalType);

  return (
    <S.Layout>
      <S.Wrapper>
        {modalType === 'signIn' && <SignIn />}
        {modalType === 'signUp' && <SignUp />}
        {modalType === 'findPsw' && <FindPsw />}
      </S.Wrapper>
    </S.Layout>
  );
}
