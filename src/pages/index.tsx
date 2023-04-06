import { NextPage } from 'next';
import ServiceList from '../components/ServiceList';
import Sidebar from '../components/Sidebar';
import SEOConfig from '../components/SEO';

const Home: NextPage = () => {
  return (
    <>
      <SEOConfig title="GAuth" />
      <Sidebar />
      <ServiceList />
    </>
  );
};

export default Home;
