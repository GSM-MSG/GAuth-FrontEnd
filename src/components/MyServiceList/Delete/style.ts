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

  svg {
    width: 5.4em;
    height: 5.4em;
  }

  h4 {
    margin-top: 20px;
    font-weight: 600;
    font-size: 0.8em;
    color: #1c1c1c;
  }

  p {
    margin-top: 6px;
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
