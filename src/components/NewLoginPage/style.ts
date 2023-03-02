import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 432px;
  height: 554px;
  background: #ffffff;
  border: 1px solid #d0d0d0;
  border-radius: 10px;
  padding: 0 40px;
  @media (max-width: 700px) {
    width: 62vw;
    height: 79vw;
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  height: 44px;
  background: #5499d9;
  border-radius: 10px;
  font-weight: 400;
  font-size: 15px;
  color: #ffffff;
  cursor: pointer;
`;

export const Section = styled.div`
  width: 100%;
  height: 252px;
`;
