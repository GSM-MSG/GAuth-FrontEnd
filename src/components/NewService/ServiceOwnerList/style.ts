import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 710px;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 28px;
  background-color: #fafafa;
  border-radius: 10px 10px 0 0;
  padding: 28px;
  padding-bottom: 0;

  @media (max-width: 755px) {
    width: 94vw;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 18px;
  }

  svg {
    cursor: pointer;
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    text-align: left;
    width: 10%;
    :nth-of-type(1) {
      width: 15%;
      padding-left: 20px;
    }

    :nth-of-type(4) {
      width: 30%;

      @media (max-width: 700px) {
        width: 20%;
      }

      @media (max-width: 590px) {
        width: 15%;
      }

      @media (max-width: 550px) {
        width: 10%;
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
      padding: 20px 0;
    }

    td {
      padding: 24px 0px;

      button {
        display: inline-flex;
        align-items: flex-start;
        gap: 4px;
        background-color: unset;
        cursor: pointer;

        @media (max-width: 510px) {
          font-size: 12px;
        }

        @media (max-width: 480px) {
          word-break: keep-all;
          padding: 8px;
        }
      }
    }
  }

  tbody {
    tr {
      border-top: 1px solid #e4e4e4;
    }
  }
`;
