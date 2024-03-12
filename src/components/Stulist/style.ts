import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;

  @media (min-width: 801px) {
    padding-left: 6.25rem;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin-top: 9.375rem;
  width: 61.875rem;
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  font-size: 20px;

  @media (max-width: 1100px) {
    margin-top: 3.125rem;
    width: 100%;
    padding: 0 3.125rem;
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
  width: 53.125rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
`;
