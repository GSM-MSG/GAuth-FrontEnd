import Link from 'next/link';
import * as S from './style';
import * as SVG from '../../../../public/svg';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { Filter } from '../../../Atom/Atoms';
import { useUserList } from '../../../hooks/useUserList';

export default function Header() {
  const filter = useRecoilValue(Filter);

  const { getUserList } = useUserList({
    defaultUri: `/user/user-list?grade=${filter.grade}&classNum=${filter.classNum}&keyword=&role=${filter.role}`,
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
        <div>
          <SVG.Alarm />
        </div>
      </Link>
    </S.Header>
  );
}
