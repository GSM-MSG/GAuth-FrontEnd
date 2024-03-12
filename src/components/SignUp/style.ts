import styled from '@emotion/styled';

export const PrivacyConsent = styled.div`
  padding-top: 4.375rem;
  width: 100%;
  height: 100%;
  font-weight: 400;
  font-size: 0.7em;
  @media (max-width: 550px) {
    padding-top: 2.1875rem;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  label {
    display: flex;
    gap: 0.5rem;
    cursor: pointer;
    @media (max-width: 550px) {
      gap: 1.5vw;
    }
  }
  input[type='checkbox'] {
    cursor: pointer;
    width: 1.125rem;
    -webkit-appearance: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    ::before {
      content: '';
      position: absolute;
      width: 1.125rem;
      height: 1.125rem;
      border: 0.0625rem solid #b4b4b4;
      border-radius: 0.1875rem;
      @media (max-width: 550px) {
        width: 3.27vw;
        height: 3.27vw;
      }
    }
    :checked {
      ::before {
        border: 0.0625rem solid #2e80cc;
      }
      ::after {
        content: '';
        position: absolute;
        transform: rotate(-40deg) translate(1px, -1px);
        width: 0.5625rem;
        height: 0.3125rem;
        border-left: 0.0625rem solid #2e80cc;
        border-bottom: 0.0625rem solid #2e80cc;
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
    gap: 0.3125rem;
    color: #000000;
    font-weight: 400;
    font-size: 15px;
  }
  div {
    margin: 1rem 0rem;
    width: 100%;
    aspect-ratio: auto 1/1;
    padding: 1.375rem;
    background: #f4f4f4;
    border-radius: 0.5rem;
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
  margin-top: 1.25rem;
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
  width: 8.4375rem;
  height: 8.4375rem;
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
  gap: 0.625rem;
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
