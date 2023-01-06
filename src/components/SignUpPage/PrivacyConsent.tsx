import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import * as S from './style';
import { useEffect, useState } from 'react';
import { NotionRenderer } from 'react-notion';
import axios from 'axios';

export default function PrivacyConsent({
  closeHandle,
}: {
  closeHandle: () => void;
}) {
  const NOTION_INSTRUCTIOM_PAGE_ID = '1386310822b1406695bc604ba28821e2';
  const [response, setResponse] = useState({});

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://notion-api.splitbee.io/v1/page/${NOTION_INSTRUCTIOM_PAGE_ID}`
      );
      setResponse(data);
    })();
  }, []);
  return (
    <>
      <S.PrivacyConsentBg onClick={closeHandle} />
      <S.PrivacyConsentWrapper>
        {Object.keys(response).length && (
          <NotionRenderer blockMap={response} fullPage={true} />
        )}
      </S.PrivacyConsentWrapper>
    </>
  );
}
