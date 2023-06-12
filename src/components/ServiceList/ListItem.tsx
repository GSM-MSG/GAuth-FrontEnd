import Image from 'next/image';
import Link from 'next/link';
import { usePreview } from '../../hooks/usePreview';
import { ClientListType } from '../../types';
import * as S from './style';

export default function ListItem({ listData }: { listData: ClientListType }) {
  const { serviceName, serviceUri } = listData;
  const imgUrl = usePreview(serviceUri);

  return (
    <S.ListItemLayer>
      <S.PreviewImg>
        {imgUrl && (
          <Image
            alt="NoImage"
            priority={true}
            src={imgUrl}
            layout="fill"
            sizes="100%"
          />
        )}
      </S.PreviewImg>
      <S.ServiceTitle>
        <h3>{serviceName}</h3>
        <Link href={serviceUri}>사이트로 이동</Link>
      </S.ServiceTitle>
    </S.ListItemLayer>
  );
}
