import Link from 'next/link';
import * as SVG from '../../../public/svg';
import * as S from './style';

export default function Sidebar() {
  return (
    <S.Positioner>
      <S.Layer>
        <S.MenuContainer>
          <S.MenuList>
            <S.MenuWrapper>
              <Link href="/servicelist">
                <SVG.ServiceList />
              </Link>
            </S.MenuWrapper>
            <S.MenuWrapper>
              <Link href="/newservice">
                <SVG.AddService />
              </Link>
            </S.MenuWrapper>
            <S.MenuWrapper>
              <Link href="/makeService">
                <SVG.My />
              </Link>
            </S.MenuWrapper>
            <S.MenuWrapper>
              <Link href="/my">
                <SVG.Intruction />
              </Link>
            </S.MenuWrapper>
          </S.MenuList>
          <S.LogoutWrapper>
            <S.MenuWrapper>
              <SVG.Logout />
            </S.MenuWrapper>
          </S.LogoutWrapper>
        </S.MenuContainer>
      </S.Layer>
    </S.Positioner>
  );
}
