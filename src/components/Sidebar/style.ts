import styled from '@emotion/styled';

export const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  height: 100%;
  z-index: 100;

  @media (max-width: 800px) {
    top: auto;
    bottom: 0;
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
  i {
    @media (min-width: 801px) {
      display: none;
    }
  }
`;

export const SideBarWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  @media (max-width: 800px) {
    position: fixed;
    transform: translateX(0);
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
    justify-content: space-between;
    padding: 20px 55px;
    background: #ffffff;
  }
`;

export const LogoutWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    svg {
      transition: 0.1s;
      transform: scale(1.5);
    }
  }

  @media (max-width: 800px) {
    display: none;
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
    justify-content: space-around;
    svg {
      width: 15px;
    }
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
