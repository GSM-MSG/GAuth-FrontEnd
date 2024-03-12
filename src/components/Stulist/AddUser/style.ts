import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 27rem;
  height: 34.625rem;
  font-size: 20px;
  background: #ffffff;
  border: 0.0625rem solid #d0d0d0;
  border-radius: 0.625rem;
  padding: 3.75rem 2.5rem 3.125rem;
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
  margin-top: 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
