import { NextPage } from 'next';
import NewFindPswPage from '../components/NewFindPsw';
import SEOConfig from '../components/SEO';

const FindPsw: NextPage = () => {
  return (
    <>
      <SEOConfig title="GAuth | newPsw" />
      <NewFindPswPage />;
    </>
  );
};

export default FindPsw;
