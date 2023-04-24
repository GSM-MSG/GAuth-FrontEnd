import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;

  @media (min-width: 801px) {
    padding-left: 100px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin-top: 150px;
  width: 990px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-size: 20px;

  @media (max-width: 1100px) {
    margin-top: 50px;
    width: 100%;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media (max-width: 650px) {
    padding: 0;
  }
`;

export const Section = styled.section`
  margin: 0;
  width: 850px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
`;
