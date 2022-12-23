import styled from '@emotion/styled';

export const Positioner = styled.div`
  position: fixed;
  width: 125px;
  height: 100%;
  margin-left: 80px;
  display: flex;
  align-items: center;
`;

export const Layer = styled.div`
  top: 2.5vh;
  width: 100%;
  height: 850px;
  border-radius: 25px;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(
    179.1deg,
    rgba(250, 250, 250, 0.9) 0%,
    rgba(255, 255, 255, 0.5) 100%
  );
  box-shadow: -10px -10px 25px rgba(255, 255, 255, 0.75),
    10px 10px 20px rgba(0, 0, 0, 0.05);
  padding-bottom: 60px;
`;

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 10px;
  gap: 150px;
`;

export const MenuList = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  padding: 50px 0;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  border-top: 1px solid #bbb;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 26px;
  gap: 8px;
  i {
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    :hover {
      background: #5499d9;
      svg {
        transform: scale(1.1);
        path {
          fill: white;
        }
      }
    }
  }
  svg {
    width: 70px;
    margin: 0;
    cursor: pointer;
  }
`;

export const LogoutWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;
