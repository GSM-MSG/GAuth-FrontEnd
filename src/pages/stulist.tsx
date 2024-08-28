import { GetServerSideProps } from 'next';
import Sidebar from '../components/Sidebar';
import StuListPage from '../components/Stulist';
import SEOConfig from '../components/SEO';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const type = context.query.type?.toString() || '';
  if (type === 'applicant') {
    return { props: { ok: true } };
  } else {
    return { props: { ok: false } };
  }
};

interface Props {
  ok: boolean;
}

const StuList = ({ ok }: Props) => {
  return (
    <>
      <SEOConfig title="GAuth | 사용자 관리" />
      <Sidebar />
      <StuListPage mode={ok} />
    </>
  );
};

export default StuList;
