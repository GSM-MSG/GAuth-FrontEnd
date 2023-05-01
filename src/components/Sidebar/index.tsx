import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import * as SVG from '../../../public/svg';
import * as S from './style';
import { NavList } from '../../lib/NavList';
import useFetch from '../../hooks/useFetch';
import TokenManager from '../../api/TokenManger';
import { useRole } from '../../hooks/useRole';
import { useRecoilValue } from 'recoil';
import { Role } from '../../Atom/Atoms';
import { AdminNavList } from '../../lib/AdminNavList';

export default function Sidebar() {
  const router = useRouter();
  const pathname = router.pathname;
  const userRole = useRecoilValue(Role);
  const navList = userRole.includes('ROLE_ADMIN') ? AdminNavList : NavList;

  useRole();

  const { fetch: logOutHandle } = useFetch({
    url: '/auth',
    method: 'delete',
    onSuccess: () => {
      const tokenManager = new TokenManager();
      tokenManager.deleteToken();
      router.replace('/login');
    },
    onFailure: () => {
      toast.error('로그아웃에 실패하였습니다.');
    },
  });

  return (
    <S.Layout>
      <S.Wrapper>
        <S.SideBarWrapper>
          <S.LogoWrapper>
            <Link href="/">
              <SVG.SideBarLogo />
            </Link>
            <i onClick={() => logOutHandle()}>
              <SVG.Logout />
            </i>
          </S.LogoWrapper>
          <S.MenuList>
            {navList.map((navData) => {
              return (
                <S.MenuWrapper
                  pathname={pathname === navData.url}
                  key={navData.url}
                >
                  <Link href={navData.url}>{navData.svg}</Link>
                </S.MenuWrapper>
              );
            })}
          </S.MenuList>
        </S.SideBarWrapper>
        <S.LogoutWrapper onClick={() => logOutHandle()}>
          <SVG.Logout />
        </S.LogoutWrapper>
      </S.Wrapper>
    </S.Layout>
  );
}
