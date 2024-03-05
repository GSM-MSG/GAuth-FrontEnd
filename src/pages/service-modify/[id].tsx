import { GetServerSidePropsContext } from 'next';
import ModifyMyService from '../../components/MyServiceList/Modify';
import SEOConfig from '../../components/SEO';
import Sidebar from '../../components/Sidebar';

export default function serviceModifyPage({ modifyId }: { modifyId: string }) {
  return (
    <>
      <SEOConfig title="GAuth | 서비스수정" />
      <Sidebar />
      <ModifyMyService modifyId={modifyId} />
    </>
  );
}

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  return { props: { modifyId: ctx.query.id } };
};
