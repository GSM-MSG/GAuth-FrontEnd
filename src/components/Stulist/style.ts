import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;

  @media (min-width: 801px) {
    padding-left: 100px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  margin-top: 150px;
  width: 990px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-size: 20px;

  @media (max-width: 1100px) {
    margin-top: 50px;
    width: 100%;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media (max-width: 650px) {
    padding: 0;
  }
`;

export const SelecTypeBtn = styled.button`
  font-weight: 500;
  font-size: 14px;
  background: none;
  color: ${({ colorType }: { colorType: boolean }) =>
    colorType ? '#5499D9' : '#BABABA'};
  cursor: pointer;
`;

export const Section = styled.div`
  margin: 0;
  width: 850px;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  border: 1px solid #e4e4e4;
  margin-top: 70px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    text-align: left;
    width: 10%;
    :nth-of-type(1) {
      padding-left: 20px;
      ${({ modeType }: { modeType: boolean }) => modeType && 'width: 80%'}
    }

    :nth-last-of-type(1) {
      width: ${({ modeType }: { modeType: boolean }) =>
        modeType ? '10%' : '50%'};
      span {
        display: flex;
        gap: 12px;
      }
    }
  }

  tr {
    font-size: 14px;
    line-height: 17px;
    color: #1c1c1c;

    th {
      font-weight: 500;
      font-size: 13px;
      color: #929292;
      padding: 27px 0px;

      input[type='checkbox'] {
        width: 16px;
        ::before {
          width: 16px;
          height: 16px;
        }
      }
    }

    td {
      padding: 33px 0px;
    }
  }

  tbody {
    tr {
      border-top: 1px solid #e4e4e4;
    }
  }
`;
