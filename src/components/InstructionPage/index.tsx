import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import { BlockMapType, NotionRenderer } from 'react-notion';
import { NotionPage } from './style';

export default function InstructionPage({
  notionId,
}: {
  notionId: BlockMapType;
}) {
  return (
    <NotionPage>
      {Object.keys(notionId).length && (
        <NotionRenderer blockMap={notionId} fullPage={true} />
      )}
    </NotionPage>
  );
}
