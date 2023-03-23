import { GetServerSideProps } from 'next';
import Sidebar from '../components/Sidebar';
import StuListPage from '../components/Stulist';

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
      <Sidebar />
      <StuListPage mode={ok} />
    </>
  );
};

export default StuList;
