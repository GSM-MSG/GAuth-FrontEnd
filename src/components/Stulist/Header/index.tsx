import Link from 'next/link';
import * as S from './style';
import * as SVG from '../../../../public/svg/index';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { Filter } from '../../../Atom/Atoms';
import { useUserList } from '../../../hooks/useUserList';

export default function Header() {
  const filter = useRecoilValue(Filter);

  const { getUserList } = useUserList({
    defaultUri: `/user/user-list?grade=${filter.grade}&classNum=${filter.classNum}&keyword=`,
  });

  useEffect(() => {
    getUserList();
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
