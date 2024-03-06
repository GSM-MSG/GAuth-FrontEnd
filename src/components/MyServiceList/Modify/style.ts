import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-left: 100px;
  padding: 100px 0 100px 100px;
  @media (max-width: 800px) {
    padding: 100px 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 400px;
  display: flex;
  font-size: 20px;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1450px) {
    padding: 0 300px;
  }
  @media (max-width: 1380px) {
    padding: 0 250px;
  }
  @media (max-width: 1250px) {
    padding: 0 200px;
  }
  @media (max-width: 1110px) {
    padding: 0 150px;
  }
  @media (max-width: 840px) {
    padding: 0 100px;
  }
  @media (max-width: 700px) {
    padding: 0 50px;
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
  gap: 4px;
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
  gap: 12px;
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
    height: 150px;
    display: flex;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #e8e8e8;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    cursor: pointer;
    gap: 8px;

    @media (max-width: 525px) {
      height: 100px;
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
  top: 4px;
  right: 4px;
  width: 24px;
  height: 24px;
  background: #ff270a;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  svg {
    margin-left: 1px;
    margin-bottom: 1px;
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

export const Border = styled.div`
  width: 100%;
  border-top: 1px solid #e0e0e0;
`;

export const Scope = styled.div`
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
  display: flex;
  gap: 4px;
  margin-top: 20px;
  svg {
    cursor: pointer;
  }
`;

export const OwnerButton = styled.button`
  width: 125px;
  height: 40px;
  cursor: pointer;
  background: none;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  color: #8c8c8c;
  font-size: 16px;
`;
