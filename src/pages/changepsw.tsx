import { NextPage } from 'next';
import NewFindPswPage from '../components/NewFindPsw';
import SEOConfig from '../components/SEO';
import NewPswPage from '../components/NewPsw';

const FindPsw: NextPage = () => {
  return (
    <>
      <SEOConfig title="GAuth | 비밀번호변경" />
      <NewPswPage />
    </>
  );
};

export default FindPsw;
