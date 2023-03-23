import { useRecoilState, useSetRecoilState } from 'recoil';
import { ApproveId, ModalPage } from '../../Atom/Atoms';
import SidBar from '../common/Sidebar/SideBar';
import AddUser from './AddUser';
import ApplicantHeader from './ApplicantHeader';
import Header from './Header';
import List from './List';
import NavBar from './NavBar';
import * as S from './style';

export default function StuListPage({ mode }: { mode: boolean }) {
  const setModalPage = useSetRecoilState(ModalPage);
  const [approve, setApproveId] = useRecoilState(ApproveId);

  const onClose = () => {
    setApproveId('');
    setModalPage(0);
  };

  return (
    <S.Layout>
      <S.Wrapper>
        {!mode && <SidBar />}
        <S.Section>
          {mode ? <ApplicantHeader /> : <Header />}
          <NavBar />
          <List type={mode} />
        </S.Section>
      </S.Wrapper>
      {approve && <AddUser onClose={onClose} />}
    </S.Layout>
  );
}
