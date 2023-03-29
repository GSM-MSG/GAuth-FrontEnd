import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  p {
    font-weight: 500;
    font-size: 0.65em;
    text-align: center;
    color: #929292;
  }

  :hover {
    label {
      border: 2px solid #5499d9;
      svg {
        transition: all 0.2s;
        transform: scale(1.4);
      }
    }
    p {
      color: #5499d9;
    }
  }
`;

export const Input = styled.input`
  display: none;

  &:checked + label {
    color: #474747;
    border: 2px solid #5499d9;
    svg {
      transform: scale(1.4);
    }
  }
`;

export const Label = styled.label`
  position: relative;
  width: 100px;
  aspect-ratio: auto 1 / 1;
  background: #ededed;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 550px) {
    width: 20vw;
  }

  p {
    position: absolute;
    font-weight: 600;
    font-size: 0.7rem;
    text-align: center;
    color: #515151;
    top: 75%;
    left: 50%;
    transform: translateX(-50%);
  }
`;
