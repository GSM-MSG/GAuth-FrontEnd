import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { BlockMapType } from 'react-notion';
import InstructionPage from '../components/InstructionPage';
import Sidebar from '../components/Sidebar';
import SEOConfig from '../components/SEO';

export default function NotionPage({ notion }: { notion?: BlockMapType }) {
  const router = useRouter();
  useEffect(() => {
    notion === null && router.push('/instruction');
  });
  if (notion)
    return (
      <>
        <SEOConfig title="GAuth | instruction" />
        <Sidebar />
        <InstructionPage notionId={notion} />
      </>
    );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const { data } = await axios.get(
      `https://notion-api.splitbee.io/v1/page/${context.query.notion}`
    );
    return { props: { notion: data } };
  } catch (e) {
    return { props: { notion: null } };
  }
};
