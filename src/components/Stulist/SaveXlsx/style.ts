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

  input[type='file'] {
    display: none;
  }
`;

export const XlsxBox = styled.label`
  width: 100%;
  aspect-ratio: auto 1 / 0.529;
  border-radius: 0.5625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  background: ${({ dragging }: { dragging: boolean }) =>
    dragging ? '#929292' : '#e0e0e0'};
  div {
    svg {
      transition: 0.2s;
      transform: ${({ dragging }: { dragging: boolean }) =>
        dragging ? 'scale(1.2)' : 'scale(1)'};
    }
  }
`;

export const AddFile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
  p {
    font-weight: 500;
    font-size: 14px;
    color: #bdbdbd;
    span {
      font-weight: 500;
      font-size: 11px;
      color: #acacac;
    }
  }
`;

export const UploadFile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  svg {
    path {
      :nth-of-type(1) {
        fill: #bdbdbd;
      }
    }
  }
  p {
    font-size: 14px;
    color: #bdbdbd;
  }
`;
