import styled from '@emotion/styled';

export const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  height: 100%;
  @media (max-width: 800px) {
    width: 100%;
    height: 50px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    flex-direction: row;
  }
`;

export const SideBarWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const LogoutWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background: #1c1c1c;
    path {
      fill: #ffff;
    }
  }
  @media (max-width: 800px) {
    position: absolute;
    top: 0;
    right: 0;
    width: 80px;
    height: 100%;
  }
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    top: 50%;
    left: 25px;
    transform: translateY(-50%);
  }
`;

export const MenuList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (max-width: 800px) {
    flex-direction: row;
  }
`;

export const MenuWrapper = styled.div`
  path {
    fill: ${({ pathname }: { pathname: boolean }) => pathname && '#999999'};
  }

  svg {
    cursor: pointer;
    transition: 0.2s;
    :hover {
      transform: scale(1.5);
    }
  }
`;
