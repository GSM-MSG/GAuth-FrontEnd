import styled from '@emotion/styled';
export * from '../style';

export const Header = styled.header`
  width: 100%;
  height: 4.0625rem;
  background: #ffffff;
  border: 0.0625rem solid #e4e4e4;
  border-radius: 0.625rem;
  padding: 0rem 1.5625rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  > p {
    font-weight: 600;
    font-size: 18px;
    display: flex;
  }
`;

export const SelectBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9375rem;

  > p {
    font-weight: 500;
    font-size: 14px;
    color: #515151;
  }

  svg {
    transform: scale(0.6);
    :hover {
      cursor: pointer;
      path {
        fill: #929292;
      }
    }
  }
`;
