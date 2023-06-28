import { useRecoilValue } from 'recoil';
import { ModalPage } from '../../Atom/Atoms';
import { useAutoLogin } from '../../hooks/useAutoLogin';
import SearchEmail from '../common/Auth/SearchEmail';
import { Layout, Wrapper } from '../common/Auth/style';
import VerifyEmail from '../common/Auth/VerifyEmail';
import NewPassword from './NewPassword';
import Notion from './Notion';
import Privacy from './Privacy';
import Profile from './Profile';
import Success from './Success';
export default function NewSignUpPage() {
  const modalPage = useRecoilValue(ModalPage);
  useAutoLogin();

  return (
    <Layout>
      <Wrapper>
        {modalPage === 0 && <SearchEmail title="회원가입" />}
        {modalPage === 1 && <VerifyEmail title="회원가입" />}
        {modalPage === 2 && <Privacy />}
        {modalPage === 3 && <NewPassword />}
        {modalPage === 4 && <Profile />}
        {modalPage === 5 && <Success />}
        {modalPage === -1 && <Notion />}
      </Wrapper>
    </Layout>
  );
}
