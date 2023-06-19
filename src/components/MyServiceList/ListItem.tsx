import Link from 'next/link';
import { usePreview } from '../../hooks/usePreview';
import { ClientListType } from '../../types';
import * as S from './style';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { FixService, isDelete, ServiceCheckList } from '../../Atom/Atoms';

export default function ListItem({ listData }: { listData: ClientListType }) {
  const { id, serviceName, serviceUri } = listData;
  const [fix, setFix] = useRecoilState(FixService);
  const imgUrl = usePreview(serviceUri);
  const modalRef = useRef<HTMLDivElement>(null);
  const fixIconRef = useRef<HTMLElement>(null);
  const [deleteState, setDeleteState] = useRecoilState(isDelete);
  const [serviceCheckList, setServiceCheckList] =
    useRecoilState(ServiceCheckList);

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

  const ListItemClick = () => {
    deleteState &&
      setServiceCheckList((prev) =>
        prev.find((data) => data.id === id)
          ? prev.filter((data) => data.id !== id)
          : [...prev, listData]
      );
  };

  return (
    <S.ListItemLayer
      check={serviceCheckList.find((data) => data.id === id)}
      onClick={ListItemClick}
    >
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
      </S.PreviweWrapper>
      <S.ServiceInfoWrapper>
        <S.ServiceTitle>{serviceName}</S.ServiceTitle>
        <Link href={serviceUri}>{serviceUri}</Link>
      </S.ServiceInfoWrapper>
      {deleteState && (
        <>
          <S.DeleteSelect
            name={`${id}`}
            type="checkbox"
            checked={
              serviceCheckList.find((data) => data.id === id) ? true : false
            }
          />
          <S.CheckContainer htmlFor={`${id}`}>
            <S.Circle />
          </S.CheckContainer>
        </>
      )}
    </S.ListItemLayer>
  );
}
