import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100%;
  height: 98vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 27rem;
  height: 34.625rem;
  font-size: 20px;
  padding: 3.75rem 2.5rem 3.125rem;
  @media (max-width: 550px) {
    width: 78vw;
    height: 100vh;
    padding: 11vw 7vw 9vw;
    font-size: 3.6364vw;
  }
`;

export const SubmitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  button {
    width: 100%;
    height: 2.75rem;
    background: #5499d9;
    border-radius: 0.625rem;
    font-weight: 400;
    font-size: 0.85em;
    color: #ffffff;
    cursor: pointer;
  }

  p {
    font-weight: 400;
    font-size: 0.85em;
    color: #929292;
    text-align: center;
    cursor: pointer;
  }
  @media (max-width: 550px) {
    gap: 3.6vw;
    button {
      height: 8vw;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  margin-top: 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  width: 100%;
  p {
    margin-top: 0.75rem;
    font-weight: 400;
    font-size: 0.75em;
    color: #f03131;
  }
`;

export const CheckingMessage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;
  color: #515151;
  text-align: center;
  h1 {
    font-weight: 700;
    font-size: 1em;
  }
  p {
    font-size: 0.85em;
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
