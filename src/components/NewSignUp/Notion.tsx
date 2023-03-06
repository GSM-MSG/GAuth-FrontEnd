import axios from 'axios';
import { useEffect, useState } from 'react';
import { NotionRenderer } from 'react-notion';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import { ModalPage, PrivacyInfo } from '../../Atom/Atoms';
import { SubmitWrapper } from '../common/Auth/style';
import * as S from './style';

export default function Notion() {
  const NOTION_INSTRUCTIOM_PAGE_ID = '1386310822b1406695bc604ba28821e2';
  const [response, setResponse] = useState({});
  const setPrivacy = useSetRecoilState(PrivacyInfo);
  const setModalPage = useSetRecoilState(ModalPage);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://notion-api.splitbee.io/v1/page/${NOTION_INSTRUCTIOM_PAGE_ID}`
        );
        setResponse(data);
      } catch (e) {
        if (!axios.isAxiosError(e)) return toast.error('unkonwn error');
      }
    })();
  }, []);

  return (
    <>
      <S.NotionWrapper>
        <a onClick={() => setModalPage(2)}>
          <i>{'<'}</i>
          개인정보 이용 약관
        </a>
        <div>
          {Object.keys(response).length ? (
            <NotionRenderer blockMap={response} fullPage={false} />
          ) : (
            'Loading...'
          )}
        </div>
      </S.NotionWrapper>
      <SubmitWrapper>
        <button
          onClick={() => {
            setModalPage(2);
            setPrivacy(true);
          }}
        >
          확인
        </button>
      </SubmitWrapper>
    </>
  );
}
