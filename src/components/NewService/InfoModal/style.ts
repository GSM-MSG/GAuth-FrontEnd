import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 27rem;
  aspect-ratio: auto 1 / 1.169;
  background: #ffffff;
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  padding: 4.375rem 2.5rem 2.5rem;
  font-size: 20px;

  h1 {
    width: 100%;
    font-weight: 600;
    font-size: 1.2em;
    display: flex;
    gap: 0.5625rem;
    margin: 0;
    align-items: center;

    svg {
      width: 1.35em;
    }
  }

  @media (max-width: 500px) {
    margin: 0 1.875rem;
    width: 100%;
    padding: 12vw 2.5rem 2.5rem;
    font-size: 3.4483vw;
  }
`;

export const ModalSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 3.75rem;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  button {
    width: 100%;
    aspect-ratio: auto 1 / 0.125;
    background: #5499d9;
    border-radius: 0.625rem;
    font-weight: 600;
    font-size: 15px;
    color: #ffffff;
    cursor: pointer;
  }

  @media (max-width: 580px) {
    padding-top: 4vw;
  }
`;

export const Info = styled.label`
  width: 100%;
  color: #929292;
  display: flex;
  align-items: center;
  gap: 0.25em;

  p {
    white-space: nowrap;
    font-weight: 400;
    font-size: 0.75em;
  }

  input {
    width: 100%;
    height: 100%;
    font-weight: 400;
    font-size: 0.75em;
    color: #929292;
  }

  span {
    cursor: pointer;

    svg {
      width: 1em;
      height: 1em;
    }

    :hover {
      path {
        fill: #5499d9;
      }
    }
  }
`;
