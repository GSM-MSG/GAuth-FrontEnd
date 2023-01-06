import { AxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import * as SVG from '../../../public/svg';
import { API } from '../../lib/API';
import * as S from './style';
import * as URL from '../../lib/URL';

export default function Sidebar() {
  const router = useRouter();
  const pathname = router.pathname;

  const logOutHandle = async () => {
    try {
      const data = await API.delete('/auth');
      if (data.status !== 204) return toast.error('로그아웃에 실패하였습니다.');
      localStorage.removeItem('Gauth-accessToken');
      localStorage.removeItem('Gauth-refreshToken');
      localStorage.removeItem('Gauth-expiredAt');
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
            <S.MenuWrapper pathname={pathname === URL.ServiceList}>
              <Link href={URL.ServiceList}>
                <a>
                  <SVG.ServiceList />
                </a>
              </Link>
            </S.MenuWrapper>
            <S.MenuWrapper pathname={pathname === URL.NewService}>
              <Link href={URL.NewService}>
                <a>
                  <SVG.AddService />
                </a>
              </Link>
            </S.MenuWrapper>
            <S.MenuWrapper pathname={pathname === URL.MyProfile}>
              <Link href={URL.MyProfile}>
                <a>
                  <SVG.My />
                </a>
              </Link>
            </S.MenuWrapper>
            <S.MenuWrapper pathname={pathname === URL.My}>
              <Link href={URL.My}>
                <a>
                  <SVG.Intruction />
                </a>
              </Link>
            </S.MenuWrapper>
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
