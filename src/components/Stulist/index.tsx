import { useRouter } from 'next/router';
import SidBar from '../common/Sidebar/SideBar';
import ApplicantHeader from './ApplicantHeader';
import Header from './Header';
import List from './List';
import NavBar from './NavBar';
import * as S from './style';

export default function StuListPage() {
  const router = useRouter();
  const mode = router.query?.type?.toString() === 'applicant';

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
    </S.Layout>
  );
}
