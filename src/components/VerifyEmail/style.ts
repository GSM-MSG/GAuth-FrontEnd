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
  min-width: 13.75rem;
  padding: 1.25rem;
  background: #fafafa;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  z-index: 200;
  border-radius: 1.25rem;
  box-shadow: 0rem 0.25rem 6.875rem 0.3125rem rgba(0, 0, 0, 0.25);

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
    width: 10.1875rem;
    height: 3.75rem;
    border-radius: 2.5rem;
    background: #2e80cc;
    color: #ffffff;
    text-align: center;
    margin: 2.5rem;
    font-size: 1.6875rem;
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
      width: 8.9375rem;
      height: 2.5rem;
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
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  background: #fff;
`;
