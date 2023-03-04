import styled from '@emotion/styled';

type WrapperType = {
  check: boolean;
};

export const Layer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(1, 1, 1, 0.2);
  z-index: 100;
`;

export const Wrapper = styled.div<WrapperType>`
  width: ${(e) => (e.check ? '42vw' : '65vw')};
  aspect-ratio: auto 1/0.605;
  min-width: 220px;
  padding: 20px;
  background: #fafafa;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  z-index: 200;
  border-radius: 20px;
  box-shadow: 0px 4px 110px 5px rgba(0, 0, 0, 0.25);

  h2 {
    font-size: 36px;
    font-weight: 500;
    text-align: center;
  }
  p {
    font-size: 29px;
    font-weight: 400;
    text-align: center;
    span {
      font-size: 29px;
      color: #2e80cc;
    }
  }
  button {
    border: none;
    width: 163px;
    height: 60px;
    border-radius: 40px;
    background: #2e80cc;
    color: #ffffff;
    text-align: center;
    margin: 40px;
    font-size: 27px;
    cursor: pointer;
  }
  @media (max-width: 850px) {
    svg {
      width: 20vw;
    }
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 24px;
      span {
        font-size: 24px;
      }
    }
    button {
      width: 143px;
      height: 40px;
      font-size: 20px;
    }
  }
  @media (max-width: 850px) {
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 18px;
      span {
        font-size: 18px;
      }
    }
  }
  @media (max-width: 600px) {
    h2 {
      font-size: 15px;
    }
    p {
      font-size: 16px;
      span {
        font-size: 16px;
      }
    }
  }
`;

export const Profile = styled.img`
  margin: 0;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  background: #fff;
`;
