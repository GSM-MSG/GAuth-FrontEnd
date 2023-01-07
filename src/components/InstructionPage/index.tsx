import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NotionRenderer } from 'react-notion';
import { NotionPage } from './style';
import { NOTION_INSTRUCTIOM_PAGE_ID } from '../../lib/InstructionUrl';

export default function InstructionPage({ notionId }: { notionId?: string }) {
  const [notionData, setNotionData] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://notion-api.splitbee.io/v1/page/${
          notionId ?? NOTION_INSTRUCTIOM_PAGE_ID
        }`
      );
      setNotionData(data);
    })();
  }, [notionId]);

  return (
    <NotionPage>
      {Object.keys(notionData).length && (
        <NotionRenderer blockMap={notionData} fullPage={true} />
      )}
    </NotionPage>
  );
}
