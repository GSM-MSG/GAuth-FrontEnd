import { useRecoilValue } from 'recoil';
import { ModalPage } from '../../Atom/Atoms';
import SearchEmail from '../common/Auth/SearchEmail';
import { Layout, Wrapper } from '../common/Auth/style';
import VerifyEmail from '../common/Auth/VerifyEmail';
import NewPassword from './NewPassword';

export default function FindPsw() {
  const modalPage = useRecoilValue(ModalPage);

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
