import styled from '@emotion/styled';

export const TableWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  border: 0.0625rem solid #e4e4e4;
  margin-top: 4.375rem;
  border-radius: 0.625rem;
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
      padding-left: 1.25rem;
      ${({ modeType }: { modeType: boolean }) => modeType && 'width: 80%'}
    }

    :nth-last-of-type(1) {
      width: ${({ modeType }: { modeType: boolean }) =>
        modeType ? '10%' : '50%'};
      span {
        display: flex;
        gap: 0.75rem;
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
      padding: 1.6875rem 0rem;

      input[type='checkbox'] {
        width: 1rem;
        ::before {
          width: 1rem;
          height: 1rem;
        }
      }
    }

    td {
      padding: 2.0625rem 0rem;
    }
  }

  tbody {
    tr {
      border-top: 0.0625rem solid #e4e4e4;
    }
  }
`;

export const SelecTypeBtn = styled.button`
  font-weight: 500;
  font-size: 0.875rem;
  background: none;
  color: ${({ colorType }: { colorType: boolean }) =>
    colorType ? '#5499D9' : '#BABABA'};
  cursor: pointer;
`;
