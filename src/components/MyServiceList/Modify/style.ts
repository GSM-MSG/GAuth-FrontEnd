import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 6.25rem 0 6.25rem 6.25rem;
  @media (max-width: 800px) {
    padding: 6.25rem 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 25rem;
  display: flex;
  font-size: 20px;
  flex-direction: column;
  gap: 1.25rem;
  @media (max-width: 1450px) {
    padding: 0 18.75rem;
  }
  @media (max-width: 1380px) {
    padding: 0 15.625rem;
  }
  @media (max-width: 1250px) {
    padding: 0 12.5rem;
  }
  @media (max-width: 1110px) {
    padding: 0 9.375rem;
  }
  @media (max-width: 840px) {
    padding: 0 6.25rem;
  }
  @media (max-width: 700px) {
    padding: 0 3.125rem;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  h2 {
    font-weight: 600;
    font-size: 16px;
  }
`;

export const MemberAddWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  cursor: pointer;
  align-items: center;
  span {
    font-size: 16px;
    color: #8c8c8c;
  }
`;

export const Title = styled.div`
  h1 {
    font-weight: 600;
    font-size: 1.2em;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  button {
    background: none;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
  }
  button:nth-of-type(1) {
    color: #3f99ee;
  }
  button:nth-of-type(2) {
    color: #8c8c8c;
  }
`;

export const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Section = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  button {
    width: 100%;
    aspect-ratio: auto 1 / 0.15;
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
`;

export const ContentSection = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  input {
    color: #929292;

    &:focus {
      color: #000;
    }

    @media (max-width: 580px) {
      margin: 0;
    }
  }
`;

export const ImgContainer = styled.div`
  width: 100%;

  label {
    width: 100%;
    height: 9.375rem;
    display: flex;
    background: #fff;
    border-radius: 0.5rem;
    border: 0.0625rem solid #e8e8e8;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    cursor: pointer;
    gap: 0.5rem;

    @media (max-width: 525px) {
      height: 6.25rem;
    }

    div {
      font-weight: 400;
      font-size: 0.65em;
      color: #929292;
    }
  }

  #file {
    display: none;
  }
`;

export const UploadContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const DeleteServiceWrapper = styled.div`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  width: 1.5rem;
  height: 1.5rem;
  background: #ff270a;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  svg {
    margin-left: 0.0625rem;
    margin-bottom: 0.0625rem;
  }
`;

export const CopyWrapper = styled.div`
  margin-top: 1.5vw;
  display: flex;
  flex-direction: column;
  gap: 2vw;
`;

export const CopyTitle = styled.div`
  p {
    font-weight: 500;
    font-size: 0.63em;
    color: #929292;
    display: flex;
    gap: 0.3125rem;
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

export const Border = styled.div`
  width: 100%;
  border-top: 0.0625rem solid #e0e0e0;
`;

export const Scope = styled.div`
  p {
    font-weight: 500;
    font-size: 0.63em;
    color: #929292;
    display: flex;
    gap: 0.3125rem;
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
  display: flex;
  gap: 0.25rem;
  margin-top: 1.25rem;
  svg {
    cursor: pointer;
  }
`;

export const OwnerButton = styled.button`
  width: 7.8125rem;
  height: 2.5rem;
  cursor: pointer;
  background: none;
  border: 0.0625rem solid #e0e0e0;
  border-radius: 0.625rem;
  color: #8c8c8c;
  font-size: 16px;
`;
