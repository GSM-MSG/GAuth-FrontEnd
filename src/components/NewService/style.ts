import styled from '@emotion/styled';

export const Positioner = styled.div`
  position: relative;
  left: 20vw;
  width: 80%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Layer = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 40%;
`;

export const FormTitle = styled.div`
  h1 {
    font-family: 'Pretendard';
  }
  h3 {
    color: #929292;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  width: 95%;
  margin-left: 5%;

  input {
    background: none;
    border-bottom: 2px solid #2e80cc;
    font-size: 24px;
    font-weight: 500;
    padding: 10px;
  }
`;

export const Submit = styled.button`
  width: 350px;
  height: 80px;
  color: #fff;
  background: #2e80cc;
  border-radius: 40px;
  font-size: 28px;
  margin: 0 auto;
  font-weight: 800;
`;

export const ImgBox = styled.div`
  width: 40%;
  display: flex;
  align-items: center;

  svg {
    width: 100%;
  }
`;

export const ModalPosition = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalLayer = styled.div`
  width: 60%;
  height: 70%;
  background: #fff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
`;

export const ModelBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 35px;

  h3 {
    color: #929292;
    text-align: center;
    svg {
      max-height: 25px;
      margin-bottom: -5px;
      cursor: pointer;
    }
  }

  div {
    :nth-of-type(1) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    :nth-of-type(2) {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
  button {
    background: #2e80cc;
    color: #fff;
    width: 300px;
    height: 80px;
    border-radius: 50px;
    font-size: 24px;
    font-weight: bold;
  }
`;
