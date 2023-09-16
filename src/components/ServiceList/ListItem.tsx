import Image from 'next/image';
import Link from 'next/link';
import { ClientListType } from '../../types';
import * as S from './style';
import DefalutImg from '../../../public/png/DefalutImg.png';

export default function ListItem({ listData }: { listData: ClientListType }) {
  const { serviceName, serviceUri, serviceImgUrl } = listData;

  return (
    <S.ListItemLayer>
      <S.PreviewImg>
        {serviceImgUrl ? (
          <Image
            alt="ServiceImg"
            priority={true}
            src={serviceImgUrl}
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <Image
            alt="NoImage"
            priority={true}
            src={DefalutImg}
            layout="fill"
            objectFit="cover"
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
