import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NotionRenderer } from 'react-notion';
import Sidebar from '../Sidebar';
import { NotionPage } from './style';

export default function InstructionPage() {
  const NOTION_INSTRUCTIOM_PAGE_ID = 'GAuth-f21f9c8c5047451780553715a181c0c8';
  const [notionData, setNotionData] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://notion-api.splitbee.io/v1/page/${NOTION_INSTRUCTIOM_PAGE_ID}`
      );
      setNotionData(data);
    })();
  }, []);

  return (
    <NotionPage>
      {Object.keys(notionData).length && (
        <NotionRenderer blockMap={notionData} fullPage={true} />
      )}
    </NotionPage>
  );
}
