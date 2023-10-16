import { ClientListType } from '../../types';
import * as S from './style';
import * as SVG from '../../../public/svg';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { FixService, isDelete, ServiceCheckList } from '../../Atom/Atoms';
import DefalutImg from '../../../public/png/DefalutImg.png';
import { useRouter } from 'next/router';

export default function ListItem({ listData }: { listData: ClientListType }) {
  const { id, serviceName, serviceUri, serviceScope, serviceImgUrl } = listData;
  const [fix, setFix] = useRecoilState(FixService);
  const modalRef = useRef<HTMLDivElement>(null);
  const fixIconRef = useRef<HTMLElement>(null);
  const deleteState = useRecoilValue(isDelete);
  const [serviceCheckList, setServiceCheckList] =
    useRecoilState(ServiceCheckList);
  const router = useRouter();

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

  const setModifyHandle = () => {
    setFix((prev) => {
      return { ...prev, id };
    });
  };

  const onModify = () => {
    if (id) {
      router.push(`/service-modify/${id}`);
    }
  };

  const ListItemClick = () => {
    if (deleteState)
      return setServiceCheckList((prev) =>
        prev.find((data) => data.id === id)
          ? prev.filter((data) => data.id !== id)
          : [...prev, listData]
      );
    setModifyHandle();
    onModify();
  };

  return (
    <S.ListItemLayer
      check={serviceCheckList.find((data) => data.id === id)}
      onClick={ListItemClick}
    >
      {!deleteState && <S.Modify>서비스 수정하기</S.Modify>}
      <S.ServiceImgWrapper>
        {serviceImgUrl ? (
          <S.ServiceImg>
            <Image
              alt="ServiceImage"
              priority={true}
              src={serviceImgUrl}
              layout="fill"
              objectFit="cover"
            />
          </S.ServiceImg>
        ) : (
          <S.DefalutImg>
            <Image
              alt="NoImage"
              priority={true}
              src={DefalutImg}
              layout="fill"
            />
          </S.DefalutImg>
        )}
      </S.ServiceImgWrapper>
      <S.ServiceInfoWrapper>
        <S.ServiceTitleContainer>
          {serviceScope === 'PUBLIC' ? (
            <SVG.ServicePublic />
          ) : (
            <SVG.ServicePrivate />
          )}
          <S.ServiceTitle>{serviceName}</S.ServiceTitle>
        </S.ServiceTitleContainer>
        <S.ServiceLink
          onClick={(e) => {
            e.stopPropagation();
          }}
          href={serviceUri}
        >
          {serviceUri}
        </S.ServiceLink>
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
