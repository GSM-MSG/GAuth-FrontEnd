import { useRouter } from 'next/router';
import InstructionPage from '../components/InstructionPage';
import Sidebar from '../components/Sidebar';
import { InstructionId } from '../lib/InstructionUrl';

export default function NotionPage() {
  const router = useRouter();

  const findId = InstructionId.find((item) => {
    if (router.query.notion === item) return item;
  });

  return (
    <>
      <Sidebar />
      {router.isReady && <InstructionPage notionId={findId} />}
    </>
  );
}
