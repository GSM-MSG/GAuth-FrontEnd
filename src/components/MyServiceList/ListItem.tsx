import Link from 'next/link';
import { usePreview } from '../../hooks/usePreview';
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
  const imgUrl = usePreview(serviceUri);

  return (
    <S.ListItemLayer>
      <S.PreviewImg src={imgUrl || `/png/NoImage.png`} />
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
