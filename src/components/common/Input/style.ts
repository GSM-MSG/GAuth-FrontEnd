import styled from '@emotion/styled';
import { errorTpye } from '../../../types/errors';

export const Wrapper = styled.div`
  margin-top: 20px;
  position: relative;
`;

export const Label = styled.label<errorTpye>`
  font-weight: 400;
  font-size: 13px;
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
  font-size: 17px;
  :valid,
  :focus {
    border-bottom: 2px solid #5499d9;
  }
`;

export const FixedInputValue = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  color: #a6a6a6;
  font-size: 17px;
`;
