import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { ApproveId, ModalPage, Role } from '../../Atom/Atoms';
import SideBar from '../common/StuListFilter';
import AddUser from './AddUser';
import ApplicantHeader from './ApplicantHeader';
import Header from './Header';
import List from './List';
import SearchBar from '../common/SearchBar';
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
    setApproveId(undefined);
    setModalPage(0);
  };

  return (
    <S.Layout>
      <S.Wrapper>
        {!mode && <SideBar />}
        <S.Section>
          <div>
            {mode ? <ApplicantHeader /> : <Header />}
            <SearchBar />
          </div>
          <List type={mode} />
        </S.Section>
      </S.Wrapper>
      {approve && <AddUser onClose={onClose} />}
    </S.Layout>
  );
}
