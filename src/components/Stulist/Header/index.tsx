import Link from 'next/link';
import * as S from './style';
import * as SVG from '../../../../public/svg/index';
import useFetch from '../../../hooks/useFetch';
import { useEffect } from 'react';
import { StuListType } from '../../../types/stuListType';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Filter, StuList } from '../../../Atom/Atoms';

export default function Header() {
  const setStulist = useSetRecoilState(StuList);
  const filter = useRecoilValue(Filter);
  const { fetch } = useFetch<StuListType[]>({
    url: `/user/user-list?grade=${filter.grade}&classNum=${filter.classNum}&keyword=`,
    method: 'get',
    onSuccess: (data) => {
      setStulist(data);
    },
  });

  useEffect(() => {
    fetch();
  }, [filter]);

  return (
    <S.Header>
      <div>
        <h1>사용자 관리</h1>
      </div>
      <Link href={'?type=applicant'}>
        <SVG.Alarm />
      </Link>
    </S.Header>
  );
}
