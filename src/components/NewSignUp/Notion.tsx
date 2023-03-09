import axios, { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { NotionRenderer } from 'react-notion';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import { ModalPage, PrivacyInfo } from '../../Atom/Atoms';
import { NotionPrivacyPageId } from '../../lib/PrivacyInfo';
import { SubmitWrapper } from '../common/Auth/style';
import * as S from './style';

export default function Notion() {
  const [response, setResponse] = useState({});
  const setPrivacy = useSetRecoilState(PrivacyInfo);
  const setModalPage = useSetRecoilState(ModalPage);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://notion-api.splitbee.io/v1/page/${NotionPrivacyPageId}`
        );
        setResponse(data);
      } catch (e) {
        if (!isAxiosError(e))
          return toast.error('예기치 못한 오류가 발생했습니다.');
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
