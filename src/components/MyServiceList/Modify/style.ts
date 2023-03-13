import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 432px;
  aspect-ratio: auto 1 / 1.491;
  padding: 50px 40px 40px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  font-size: 20px;

  > h1 {
    font-weight: 600;
    font-size: 1.2em;
  }

  > form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  button {
    width: 100%;
    aspect-ratio: auto 1 / 0.125;
    font-weight: 600;
    font-size: 15px;
    background: #5499d9;
    border-radius: 10px;
    color: #ffffff;
    cursor: pointer;
    opacity: 0.8;
    transition: 0.4s;

    :hover {
      opacity: 1;
    }
  }

  @media (max-width: 550px) {
    width: 78vw;
    font-size: 3.6364vw;
  }
`;

export const CopyWrapper = styled.div`
  margin-top: 3vw;
  display: flex;
  flex-direction: column;
  gap: 3vw;
`;

export const CopyTitle = styled.div`
  p {
    font-weight: 500;
    font-size: 0.63em;
    color: #929292;
    display: flex;
    gap: 5px;
    align-items: center;

    i {
      cursor: pointer;

      :hover {
        path {
          fill: #5499d9;
        }
      }
    }
  }

  h4 {
    font-weight: 400;
    font-size: 0.7em;
    color: #cccccc;
    overflow-y: hidden;
    overflow-x: scroll;
    -ms-overflow-style: none;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
