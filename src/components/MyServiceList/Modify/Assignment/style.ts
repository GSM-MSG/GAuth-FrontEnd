import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 426px;
  aspect-ratio: auto 1 / 1.319;
  background: #ffffff;
  border-radius: 10px;
  padding: 50px 40px 40px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 20px;

  > h1 {
    font-weight: 600;
    font-size: 1.2em;
  }
  > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 550px) {
    width: 78vw;
    font-size: 3.6364vw;
    padding: 9vw 40px 40px;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  svg {
    width: 5.4em;
    height: 5.4em;
  }

  h4 {
    font-weight: 600;
    font-size: 0.8em;
    color: #1c1c1c;
  }

  p {
    margin-top: 6px;
    margin-right: 3px;
    font-weight: 500;
    font-size: 0.65em;
    color: #929292;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  aspect-ratio: auto 1 / 0.125;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const Button = styled.button`
  width: 100%;
  font-weight: 500;
  font-size: 0.65em;
  border-radius: 10px;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.4s;

  background: ${({ modeType }: { modeType: boolean }) =>
    modeType ? '#DE4949' : '#D1D1D1'};
  color: ${({ modeType }: { modeType: boolean }) =>
    modeType ? '#FFFFFF' : '#888888'};

  :hover {
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 710px;
  height: 100%;
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
        display:flex;
        color: #3f99ee;
        padding: 8px 8px;
        background: none;
        cursor: pointer;
        align-items:center;
        gap: 4px;

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
