export * from '../../common/Auth/style';

import styled from '@emotion/styled';

export const SuccessWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #515151;
  h1 {
    font-weight: 700;
    font-size: 1em;
  }
  p {
    font-weight: 400;
    font-size: 0.75em;
  }
`;
