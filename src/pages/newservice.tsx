import NewServicePage from '../components/NewService';
import SEOConfig from '../components/SEO';
import Sidebar from '../components/Sidebar';

export default function Add() {
  return (
    <>
      <SEOConfig title="GAuth | newService" />
      <Sidebar />
      <NewServicePage />
    </>
  );
}
