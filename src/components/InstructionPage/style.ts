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

  @media (min-width: 801px) {
    padding-left: 100px;
  }
`;

export const Wrapper = styled.div`
  width: 1200px;
  font-size: 20px;

  pre {
    background: transparent;
  }
  code {
    color: #000;
  }

  @media (max-width: 1400px) {
    width: 100%;
    margin: 0 50px 50px;

    > * {
      font-size: 1.125vw;
    }
  }
`;
