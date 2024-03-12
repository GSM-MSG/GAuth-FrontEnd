import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 44.375rem;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  background-color: #fafafa;
  border-radius: 0.625rem 0.625rem 0 0;
  padding: 1.75rem;
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
  border: 0.0625rem solid #e0e0e0;
  border-radius: 0.625rem;
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
      padding-left: 1.25rem;
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
      padding: 1.25rem 0;
    }

    td {
      padding: 1.5rem 0rem;

      button {
        color: #3f99ee;
        padding: 0.5rem 0.75rem;
        border: 0.0625rem solid #9ccbf6;
        border-radius: 0.625rem;
        background: none;
        cursor: pointer;

        @media (max-width: 510px) {
          font-size: 0.75rem;
        }

        @media (max-width: 480px) {
          word-break: keep-all;
          padding: 0.5rem;
        }
      }
    }
  }

  tbody {
    tr {
      border-top: 0.0625rem solid #e4e4e4;
    }
  }
`;
