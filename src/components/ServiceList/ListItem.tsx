import Link from 'next/link';
import { usePreview } from '../../hooks/usePreview';
import { ClientListType } from '../../types';
import * as S from './style';

export default function ListItem({ listData }: { listData: ClientListType }) {
  const { serviceName, serviceUri } = listData;
  const imgUrl = usePreview(serviceUri);

  return (
    <S.ListItemLayer>
      <S.PreviewImg src={imgUrl || `/png/NoImage.png`} />
      <S.ServiceTitle>{serviceName}</S.ServiceTitle>
      <Link href={serviceUri}>{serviceUri}</Link>
    </S.ListItemLayer>
  );
}
