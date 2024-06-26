import styled from '@emotion/styled';
export const DetailWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  color: #515151;
  h1 {
    font-weight: 700;
    font-size: 1em;
  }
  p {
    font-weight: 400;
    font-size: 0.75em;
    display: inline;
    padding-left: 15px;
    line-height: 20px;
    color: #8c8c8c;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;
