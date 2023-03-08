import styled from '@emotion/styled';

export const Title = styled.h2`
  font-weight: 700;
  font-size: 1em;
  color: #1c1c1c;
`;

export const Logo = styled.div`
  margin-top: 10px;
  @media (max-width: 550px) {
    margin-top: 5px;
    svg {
      width: 19vw;
    }
  }
`;

export const SubTitle = styled.h4`
  margin-top: 19px;
  font-weight: 400;
  font-size: 0.75em;
  color: #515151;
  span {
    color: #2f86d7;
    margin-left: 2px;
    cursor: pointer;
  }
  @media (max-width: 550px) {
    margin-top: 2px;
  }
`;
