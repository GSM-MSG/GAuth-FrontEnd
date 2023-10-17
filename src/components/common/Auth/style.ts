import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 432px;
  height: 554px;
  font-size: 20px;
  background: #ffffff;
  padding: 60px 40px 50px;
  @media (max-width: 550px) {
    width: 78vw;
    height: 101vw;
    padding: 11vw 7vw 9vw;
    font-size: 3.6364vw;
  }
`;

export const SubmitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  button {
    width: 100%;
    height: 44px;
    background: #5499d9;
    border-radius: 10px;
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
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  width: 100%;
  p {
    margin-top: 12px;
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
  gap: 5px;
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
