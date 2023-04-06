import MyProfilePage from '../components/MyProfilePage';
import SEOConfig from '../components/SEO';
import Sidebar from '../components/Sidebar';

export default function MyProfile() {
  return (
    <>
      <SEOConfig title="GAuth | profile" />
      <Sidebar />
      <MyProfilePage />
    </>
  );
}
