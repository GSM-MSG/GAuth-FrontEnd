import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const SelectBox = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  p {
    font-weight: 400;
    font-size: 0.65em;
    color: #929292;
    text-align: left;
  }

  div {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;

export const Input = styled.input`
  display: none;
  &:checked + label {
    color: #474747;
    background: #77b8f4;
    color: #ffffff;
  }
`;

export const Label = styled.label`
  width: 85px;
  aspect-ratio: auto 1 / 0.671;
  background: #ededed;
  border-radius: 5px;
  color: #7d7d7d;
  font-weight: 600;
  font-size: 0.65em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 550px) {
    width: 16vw;
  }
`;
