import Link from 'next/link';
import { usePreview } from '../../hooks/usePreview';
import { ClientListType } from '../../types';
import * as S from './style';
import * as SVG from '../../../public/svg';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function ListItem({ listData }: { listData: ClientListType }) {
  const { serviceName, serviceUri } = listData;
  const [toggle, setToggle] = useState(false);
  const imgUrl = usePreview(serviceUri);
  const modalRef = useRef<HTMLDivElement>(null);
  const fixIconRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!toggle) return;
    const checkOutSide = (e: MouseEvent) => {
      if (!modalRef.current || !fixIconRef.current) return;
      if (
        !modalRef.current.contains(e.target as Node) &&
        !fixIconRef.current.contains(e.target as Node)
      ) {
        setToggle((prev) => !prev);
      }
    };
    document.addEventListener('mousedown', checkOutSide);
    return () => {
      document.removeEventListener('mousedown', checkOutSide);
    };
  }, [toggle]);

  return (
    <S.ListItemLayer>
      <S.PreviweWrapper>
        <S.PreviewImg>
          <Image
            alt="NoImage"
            priority={true}
            src={imgUrl || `/png/NoImage.png`}
            fill
            sizes="100%"
          />
        </S.PreviewImg>
        <i ref={fixIconRef} onClick={() => setToggle((prev) => !prev)}>
          <SVG.FixIcon />
        </i>
        {toggle && (
          <S.ItemController ref={modalRef}>
            <p>수정</p>
            <p>삭제</p>
          </S.ItemController>
        )}
      </S.PreviweWrapper>
      <S.ServiceInfoWrapper>
        <S.ServiceTitle>{serviceName}</S.ServiceTitle>
        <Link href={serviceUri}>{serviceUri}</Link>
      </S.ServiceInfoWrapper>
    </S.ListItemLayer>
  );
}
