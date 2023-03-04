import { NextPage } from 'next';
import ServiceList from '../components/ServiceList';
import Sidebar from '../components/Sidebar';

const Home: NextPage = () => {
  return (
    <>
      <Sidebar />
      <ServiceList />
    </>
  );
};

export default Home;
