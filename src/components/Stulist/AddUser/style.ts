import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 432px;
  height: 554px;
  font-size: 20px;
  background: #ffffff;
  border: 1px solid #d0d0d0;
  border-radius: 10px;
  padding: 60px 40px 50px;
  @media (max-width: 550px) {
    width: 78vw;
    height: 101vw;
    padding: 11vw 7vw 9vw;
    font-size: 3.6364vw;
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
