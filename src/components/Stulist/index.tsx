import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { ApproveId, ModalPage, Role } from '../../Atom/Atoms';
import SidBar from '../common/Sidebar/SideBar';
import AddUser from './AddUser';
import ApplicantHeader from './ApplicantHeader';
import Header from './Header';
import List from './List';
import NavBar from './NavBar';
import * as S from './style';

export default function StuListPage({ mode }: { mode: boolean }) {
  const route = useRouter();
  const setModalPage = useSetRecoilState(ModalPage);
  const [approve, setApproveId] = useRecoilState(ApproveId);
  const userRole = useRecoilValue(Role);

  useEffect(() => {
    !!userRole.length && !userRole.includes('ROLE_ADMIN') && route.push('/');
  }, [userRole]);

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