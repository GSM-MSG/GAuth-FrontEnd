import styled from '@emotion/styled';

type placedprop = {
  num: number;
  color: string;
};

export const cube = styled.div`
  position: relative;
  width: 3.125rem;
  aspect-ratio: auto 1/1;
  transform-style: preserve-3d;
  animation: animate 2s linear infinite;
  @keyframes animate {
    0% {
      transform: rotateX(0deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(360deg) rotateY(360deg);
    }
  }
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }
  @media (max-width: 550px) {
    width: 9vw;
  }
`;

export const span = styled.span<placedprop>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(100, 100, 255), ${(props) => props.color});
  transform: rotateY(calc(90deg * var(--i))) translateZ(25px);
  --i: ${(prop) => prop.num};
  @media (max-width: 550px) {
    transform: rotateY(calc(90deg * var(--i))) translateZ(4.5vw);
  }
`;
export const top = styled.div`
  width: 3.125rem;
  aspect-ratio: auto 1/1;
  background-color: rgba(100, 100, 255);
  transform: rotateX(90deg) translateZ(25px);
  @media (max-width: 550px) {
    width: 9vw;
    transform: rotateX(90deg) translateZ(4.5vw);
  }
`;
export const bottom = styled(top)`
  background-color: #00ccff;
  transform: rotateX(90deg) translateZ(-25px);
  @media (max-width: 550px) {
    transform: rotateX(90deg) translateZ(-4.5vw);
  }
`;
