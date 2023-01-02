import Link from 'next/link';
import { ClientListType } from '../../types';
import * as S from './style';

export default function ListItem({
  listData,
  setModifyItem,
}: {
  listData: ClientListType;
  setModifyItem: () => void;
}) {
  const { serviceName, serviceUri } = listData;
  return (
    <S.ListItemLayer>
      <S.PreviewImg src={serviceUri} />
      <S.ServiceTitle>{serviceName}</S.ServiceTitle>
      <Link href={serviceUri}>
        <a>
          {serviceUri.length >= 20
            ? serviceUri.slice(0, 20) + '...'
            : serviceUri}
        </a>
      </Link>
      <S.ServiceFixBtn onClick={() => setModifyItem()}>수정</S.ServiceFixBtn>
    </S.ListItemLayer>
  );
}
