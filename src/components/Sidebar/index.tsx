import { isAxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import * as SVG from '../../../public/svg';
import * as S from './style';
import { accessToken, expiredAt, refreshToken } from '../../lib/Token';
import { NavList } from '../../lib/NavList';
import API from '../../api';

export default function Sidebar() {
  const router = useRouter();
  const pathname = router.pathname;

  const logOutHandle = async () => {
    try {
      await API.delete('/auth');
      localStorage.removeItem(accessToken);
      localStorage.removeItem(refreshToken);
      localStorage.removeItem(expiredAt);
      router.replace('/login');
    } catch (e) {
      if (!isAxiosError(e))
        return toast.error('예기치 못한 오류가 발생하였습니다.');
      toast.error('로그아웃에 실패하였습니다.');
    }
  };

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
            {NavList.map((navData) => {
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
