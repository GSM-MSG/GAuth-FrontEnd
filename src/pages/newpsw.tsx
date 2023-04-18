import { NextPage } from 'next';
import NewFindPswPage from '../components/NewFindPsw';
import SEOConfig from '../components/SEO';

const FindPsw: NextPage = () => {
  return (
    <>
      <SEOConfig title="GAuth | 비밀번호변경" />
      <NewFindPswPage />
    </>
  );
};

export default FindPsw;
