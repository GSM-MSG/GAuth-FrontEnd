import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  header {
    max-height: 0;
    min-height: 0;
    opacity: 0;
  }

  @media (min-width: 800px) {
    padding-left: 6.25rem;
  }
`;

export const Wrapper = styled.div`
  width: 75rem;
  font-size: 1.25rem;

  pre {
    background: transparent;
  }
  code {
    color: #000;
  }

  @media (max-width: 1400px) {
    width: 100%;
    margin: 0 3.125rem 3.125rem;

    > * {
      font-size: 1.125vw;
    }
  }
`;
