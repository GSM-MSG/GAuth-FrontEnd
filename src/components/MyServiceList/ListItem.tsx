import Link from 'next/link';
import { usePreview } from '../../hooks/usePreview';
import { ClientListType } from '../../types';
import * as S from './style';
import * as SVG from '../../../public/svg';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { FixService } from '../../Atom/Atoms';

export default function ListItem({ listData }: { listData: ClientListType }) {
  const { id, serviceName, serviceUri } = listData;
  const [fix, setFix] = useRecoilState(FixService);
  const imgUrl = usePreview(serviceUri);
  const modalRef = useRef<HTMLDivElement>(null);
  const fixIconRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkOutSide = (e: MouseEvent) => {
      if (!modalRef.current || !fixIconRef.current) return;
      if (
        !modalRef.current.contains(e.target as Node) &&
        !fixIconRef.current.contains(e.target as Node)
      ) {
        if (fix.type === '') {
          setFix((prev) => {
            return { ...prev, id: undefined, toggle: false };
          });
        }
      }
    };
    document.addEventListener('mousedown', checkOutSide);
    return () => {
      document.removeEventListener('mousedown', checkOutSide);
    };
  }, [fix, setFix]);

  const setTypeHandle = (type: string) => {
    setFix((prev) => {
      return { ...prev, type: type };
    });
  };

  return (
    <S.ListItemLayer>
      <S.PreviweWrapper>
        <S.PreviewImg>
          <Image
            alt="NoImage"
            priority={true}
            src={imgUrl || `/png/NoImage.png`}
            layout="fill"
            sizes="100%"
          />
        </S.PreviewImg>
        <i
          ref={fixIconRef}
          onClick={() => {
            setFix((prev) => {
              return {
                id: id,
                type: '',
                toggle: !prev.toggle,
              };
            });
          }}
        >
          <SVG.FixIcon />
        </i>
        {fix.id === id && fix.toggle && (
          <S.ItemController ref={modalRef}>
            <p onClick={() => setTypeHandle('modify')}>수정</p>
            <p onClick={() => setTypeHandle('delete')}>삭제</p>
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
