import 'react-notion/src/styles.css';
import { BlockMapType, NotionRenderer } from 'react-notion';
import * as S from './style';

export default function InstructionPage({
  notionId,
}: {
  notionId: BlockMapType;
}) {
  return (
    <S.Layout>
      <S.Wrapper>
        {Object.keys(notionId).length && (
          <NotionRenderer blockMap={notionId} fullPage={true} />
        )}
      </S.Wrapper>
    </S.Layout>
  );
}
