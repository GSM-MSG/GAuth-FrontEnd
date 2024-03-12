import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  @media (min-width: 801px) {
    padding-left: 6.25rem;
  }
`;

export const Wrapper = styled.div`
  width: 56.875rem;
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;

  @media (max-width: 1100px) {
    width: 100%;
    padding: 0 3.125rem;
  }
`;

export const TitleSection = styled.div`
  width: 100%;
  margin-top: 6vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;

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
  width: 23.25rem;
  height: 10.5rem;
  background: #ffffff;
  border: 0.0625rem solid #e4e4e4;
  border-radius: 0.625rem;
  margin-top: 2vw;
  display: flex;

  @media (max-width: 500px) {
    width: 100%;
  }

  @media (max-width: 420px) {
    height: auto;
    flex-direction: column;
    text-align: center;
    padding-bottom: 0.625rem;
  }
`;

export const ProfileSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.125rem 1.5rem;

  > svg {
    width: 6.25rem;
    height: 6.25rem;
  }

  label {
    position: relative;
    cursor: pointer;

    i {
      position: absolute;
      right: 0;
      bottom: 0;
    }

    :hover {
      i {
        path {
          fill: #868e96;
        }
      }
    }
  }
`;

export const Profile = styled.div`
  position: relative;
  width: 6.25rem;
  height: 6.25rem;
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

export const PrivacySection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.8125rem;
  color: #000000;

  h1 {
    font-weight: 700;
    font-size: 13px;
  }

  p {
    margin-top: 0.25rem;
    font-weight: 600;
    font-size: 13px;
  }

  h3 {
    margin-top: 0.5rem;
    font-weight: 300;
    font-size: 15px;
    color: #929292;
  }

  @media (max-width: 420px) {
    margin: 0;
  }
`;

export const Hr = styled.hr`
  margin-top: 2.5rem;
  background: #e6e6e6;
  border-radius: 0.125rem;
`;
