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
  background: #ffffff;
  border: 1px solid #d0d0d0;
  border-radius: 10px;
  padding: 60px 40px 50px;
  @media (max-width: 700px) {
    width: 62vw;
    height: 79vw;
  }
`;

export const SubmitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  button {
    width: 100%;
    height: 44px;
    background: #5499d9;
    border-radius: 10px;
    font-weight: 400;
    font-size: 15px;
    color: #ffffff;
    cursor: pointer;
  }

  p {
    font-weight: 400;
    font-size: 15px;
    color: #929292;
    text-align: center;
    cursor: pointer;
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
    font-size: 15px;
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
    font-size: 20px;
  }
  p {
    font-size: 15px;
    line-height: 18px;
  }
`;
