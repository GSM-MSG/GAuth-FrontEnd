import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;

  @media (min-width: 801px) {
    padding-left: 100px;
  }
`;

export const Wrapper = styled.div`
  width: 910px;
  display: flex;
  flex-direction: column;
  font-size: 20px;

  @media (max-width: 1100px) {
    width: 100%;
    padding: 0 50px;
  }
`;

export const TitleSection = styled.div`
  width: 100%;
  margin-top: 6vw;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    font-weight: 700;
    font-size: 1.2em;
    color: #1c1c1c;
  }
  h3 {
    font-weight: 600;
    font-size: 0.8em;
    color: #929292;
  }

  @media (max-width: 500px) {
    font-size: 4vw;
  }

  @media (max-width: 800px) {
    margin-top: 8vh;
  }
`;

export const ProfileWrapper = styled.div`
  width: 372px;
  height: 167px;
  background: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  margin-top: 2vw;
  display: flex;

  @media (max-width: 500px) {
    width: 100%;
  }

  @media (max-width: 420px) {
    height: auto;
    flex-direction: column;
    text-align: center;
    padding-bottom: 10px;
  }
`;

export const ProfileSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 33px 24px;

  > svg {
    width: 100px;
    height: 100px;
  }

  label {
    position: relative;
    cursor: pointer;
  }

  div {
    cursor: pointer;
  }
`;

export const Profile = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

export const Circle = styled.div`
  position: absolute;
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);

  div {
    display: flex;
    width: 6.25rem;
    height: 3.125rem;
    border: 0;
    border-radius: 150px 150px 0 0;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-weight: 700;
    backdrop-filter: blur(2px);

    :hover {
      background-color: rgba(255, 255, 255, 0.25);
    }
  }

  label {
    display: flex;
    width: 6.25rem;
    height: 3.125rem;
    border: 0;
    border-radius: 0 0 150px 150px;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-weight: 700;
    backdrop-filter: blur(2px);

    :hover {
      background-color: rgba(255, 255, 255, 0.25);
    }
  }
`;

export const PrivacySection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 13px;
  color: #000000;

  h1 {
    font-weight: 700;
    font-size: 13px;
  }

  p {
    margin-top: 4px;
    font-weight: 600;
    font-size: 13px;
  }

  h3 {
    margin-top: 8px;
    font-weight: 300;
    font-size: 15px;
    color: #929292;
  }

  @media (max-width: 420px) {
    margin: 0;
  }
`;

export const Hr = styled.hr`
  margin-top: 41px;
  background: #e6e6e6;
  border-radius: 2px;
`;