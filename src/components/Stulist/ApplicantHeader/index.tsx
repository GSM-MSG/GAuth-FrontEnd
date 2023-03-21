import Link from 'next/link';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { StuList } from '../../../Atom/Atoms';
import useFetch from '../../../hooks/useFetch';
import { stuListType } from '../../../types/stuListType';
import * as S from './style';

export default function ApplicantHeader() {
  const setStulist = useSetRecoilState(StuList);
  const { fetch } = useFetch<stuListType[]>({
    url: '/user/pending',
    method: 'get',
    onSuccess: (data) => {
      setStulist(data);
    },
  });

  useEffect(() => {
    fetch();
  }, []);

  return (
    <S.Header>
      <S.Title>
        <Link href="">{'<'}</Link>
        <p>가입요청</p>
      </S.Title>
      <S.SelectBtnWrapper>
        <p>선택 항목 일괄</p>
        <span>
          <S.SelecTypeBtn colorType={true}>수락</S.SelecTypeBtn>
          <S.SelecTypeBtn colorType={false}>거절</S.SelecTypeBtn>
        </span>
      </S.SelectBtnWrapper>
    </S.Header>
  );
}
