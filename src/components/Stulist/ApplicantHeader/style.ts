import styled from '@emotion/styled';
export * from '../style';

export const Header = styled.header`
  width: 100%;
  height: 65px;
  background: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  padding: 0px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  > p {
    font-weight: 600;
    font-size: 18px;
    display: flex;
  }
`;

export const SelectBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  > p {
    font-weight: 500;
    font-size: 14px;
    color: #515151;
  }

  span {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;
