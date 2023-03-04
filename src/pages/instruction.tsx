import axios from 'axios';
import { BlockMapType } from 'react-notion';
import InstructionPage from '../components/InstructionPage';
import Sidebar from '../components/Sidebar';

export default function NotionPage({ notion }: { notion: BlockMapType }) {
  return (
    <>
      <Sidebar />
      <InstructionPage notionId={notion} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const { data } = await axios.get(
      `https://notion-api.splitbee.io/v1/page/${process.env.NEXT_PUBLIC_NOTION_INSTRUCTIOM_PAGE_ID}`
    );
    return { props: { notion: data } };
  } catch (e) {
    return { props: { notion: null } };
  }
}
