import NewServicePage from '../components/NewService';
import SEOConfig from '../components/SEO';
import Sidebar from '../components/Sidebar';

export default function Add() {
  return (
    <>
      <SEOConfig title="GAuth | 서비스등록" />
      <Sidebar />
      <NewServicePage />
    </>
  );
}
