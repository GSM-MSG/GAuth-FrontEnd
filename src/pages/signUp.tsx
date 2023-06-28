import { NextPage } from 'next';
import NewSignUpPage from '../components/SignUp';
import SEOConfig from '../components/SEO';

const SignUp: NextPage = () => {
  return (
    <>
      <SEOConfig title="GAuth | 회원가입" />
      <NewSignUpPage />
    </>
  );
};

export default SignUp;
