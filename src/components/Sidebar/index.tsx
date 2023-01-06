import { AxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import * as SVG from '../../../public/svg';
import { API } from '../../lib/API';
import * as S from './style';
import { accessToken, expiredAt, refreshToken } from '../../lib/Token';
import { NavList } from '../../lib/NavList';

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
      if (!(e instanceof AxiosError))
        return toast.error('예기치 못한 오류가 발생하였습니다.');
      toast.error('로그아웃에 실패하였습니다.');
    }
  };

  return (
    <S.Positioner>
      <S.Layer>
        <S.MenuContainer>
          <S.LogoWrapper>
            <Link href="/">
              <a>
                <SVG.SideBarLogo />
              </a>
            </Link>
          </S.LogoWrapper>
          <S.MenuList>
            {NavList.map((navData) => {
              return (
                <S.MenuWrapper
                  pathname={pathname === navData.url}
                  key={navData.url}
                >
                  <Link href={navData.url}>
                    <a>{navData.svg}</a>
                  </Link>
                </S.MenuWrapper>
              );
            })}
          </S.MenuList>
          <S.LogoutWrapper>
            <a onClick={() => logOutHandle()}>
              <SVG.Logout />
            </a>
          </S.LogoutWrapper>
        </S.MenuContainer>
      </S.Layer>
    </S.Positioner>
  );
}
