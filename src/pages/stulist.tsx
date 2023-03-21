import { NextPage } from 'next';
import Sidebar from '../components/Sidebar';
import StuListPage from '../components/Stulist';

const StuList: NextPage = () => {
  return (
    <>
      <Sidebar />
      <StuListPage />
    </>
  );
};

export default StuList;
