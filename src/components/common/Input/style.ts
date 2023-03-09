import styled from '@emotion/styled';
import { ErrorType } from '../../../types';

export const Wrapper = styled.div`
  margin-top: 20px;
  position: relative;
  @media (max-width: 550px) {
    margin-top: 2px;
  }
`;

export const Label = styled.label<ErrorType>`
  font-weight: 400;
  font-size: 0.65em;
  color: ${({ errors }) => (errors ? ' #F03131' : '#929292')};
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #d7d7d7;
  background: transparent;
  font-size: 0.85em;
  :valid,
  :focus {
    border-bottom: 2px solid #5499d9;
  }
  @media (max-width: 550px) {
    height: 7.27vw;
  }
`;

export const FixedInputValue = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  color: #a6a6a6;
  font-size: 0.85em;
`;
