import { useRecoilValue } from 'recoil';
import SearchEmail from '../common/Auth/SearchEmail';
import { ModalPage } from '../../Atom/Atoms';
import { Layout, Wrapper } from '../common/Auth/style';
import VerifyEmail from '../common/Auth/VerifyEmail';
import NewPassword from './NewPassword';
import { useAutoLogin } from '../../hooks/useAutoLogin';

export default function NewFindPswPage() {
  const modalPage = useRecoilValue(ModalPage);
  useAutoLogin();

  return (
    <Layout>
      <Wrapper>
        {modalPage === 0 && <SearchEmail title="비밀번호" />}
        {modalPage === 1 && <VerifyEmail title="비밀번호" />}
        {modalPage === 2 && <NewPassword />}
      </Wrapper>
    </Layout>
  );
}
