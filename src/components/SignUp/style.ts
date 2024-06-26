import styled from '@emotion/styled';

export const PrivacyConsent = styled.div`
  padding-top: 70px;
  width: 100%;
  height: 100%;
  font-weight: 400;
  font-size: 0.7em;
  @media (max-width: 550px) {
    padding-top: 35px;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  label {
    display: flex;
    gap: 8px;
    cursor: pointer;
    @media (max-width: 550px) {
      gap: 1.5vw;
    }
  }
  input[type='checkbox'] {
    cursor: pointer;
    width: 18px;
    -webkit-appearance: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    ::before {
      content: '';
      position: absolute;
      width: 18px;
      height: 18px;
      border: 1px solid #b4b4b4;
      border-radius: 3px;
      @media (max-width: 550px) {
        width: 3.27vw;
        height: 3.27vw;
      }
    }
    :checked {
      ::before {
        border: 1px solid #2e80cc;
      }
      ::after {
        content: '';
        position: absolute;
        transform: rotate(-40deg) translate(1px, -1px);
        width: 9px;
        height: 5px;
        border-left: 1px solid #2e80cc;
        border-bottom: 1px solid #2e80cc;
      }
    }
  }
  p {
    color: #1c1c1c;
  }
  a {
    color: #a6a6a6;
    cursor: pointer;
  }
`;

export const NotionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    color: #000000;
    font-weight: 400;
    font-size: 15px;
  }
  div {
    margin: 17px 0px;
    width: 100%;
    aspect-ratio: auto 1/1;
    padding: 22px;
    background: #f4f4f4;
    border-radius: 7px;
    overflow: scroll;

    div {
      height: 0;
      margin: 0;
      ::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

export const ProfileTitle = styled.p`
  margin-top: 20px;
  font-weight: 600;
  font-size: 0.85em;
  color: #515151;
  strong {
    font-weight: 900;
  }
`;

export const ProfileSVGWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  label {
    cursor: pointer;
    @media (max-width: 550px) {
      svg {
        width: 24.5vw;
      }
    }
  }
`;

export const Profile = styled.img`
  width: 135px;
  height: 135px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  background: #fff;
  @media (max-width: 550px) {
    width: 24.5vw;
    height: 24.5vw;
  }
`;

export const SuccessWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #515151;
  h1 {
    font-weight: 700;
    font-size: 1em;
  }
  p {
    font-weight: 400;
    font-size: 0.75em;
  }
`;

export const ConfirmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  button {
    width: 100%;
    height: 44px;
    background: #3f99ee;
    border-radius: 10px;
    font-weight: 400;
    font-size: 0.85em;
    color: #ffffff;
    cursor: pointer;
  }

  p {
    font-weight: 400;
    font-size: 0.85em;
    color: #929292;
    text-align: center;
    cursor: pointer;
  }
`;
