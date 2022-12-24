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
                <a>
                  <SVG.ServiceList />
                </a>
              </Link>
            </S.MenuWrapper>
            <S.MenuWrapper>
              <Link href="/newservice">
                <a>
                  <SVG.AddService />
                </a>
              </Link>
            </S.MenuWrapper>
            <S.MenuWrapper>
              <Link href="/makeService">
                <a>
                  <SVG.My />
                </a>
              </Link>
            </S.MenuWrapper>
            <S.MenuWrapper>
              <Link href="/my">
                <a>
                  <SVG.Intruction />
                </a>
              </Link>
            </S.MenuWrapper>
          </S.MenuList>
          <S.LogoutWrapper>
            <S.MenuWrapper>
              <a>
                <SVG.Logout />
              </a>
            </S.MenuWrapper>
          </S.LogoutWrapper>
        </S.MenuContainer>
      </S.Layer>
    </S.Positioner>
  );
}
