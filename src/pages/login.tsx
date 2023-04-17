import { NextPage } from 'next';
import NewSignInPage from '../components/NewSignIn';
import SEOConfig from '../components/SEO';

const Login: NextPage = () => {
  return (
    <>
      <SEOConfig title="GAuth | 로그인" />
      <NewSignInPage />;
    </>
  );
};

export default Login;
