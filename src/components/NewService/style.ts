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
  width: 75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.25rem;

  @media (max-width: 1500px) {
    align-items: center;
  }

  @media (max-width: 550px) {
    font-size: 3.6364vw;
    width: 100%;
    margin: 0 3.125rem;
  }
`;

export const TitleSection = styled.div`
  width: 100%;
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
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 22rem;

  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  label {
    width: 100%;
    height: 11.25rem;
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

    div {
      font-weight: 400;
      font-size: 0.65em;
      color: #929292;
    }
  }

  #file {
    display: none;
  }
  p {
    font-weight: 400;
    font-size: 0.65em;
    color: #929292;
    display: flex;
    align-items: center;
    margin-top: 0.25rem;
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

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  width: 100%;
  margin-top: 3.3125rem;

  span {
    margin-top: 1.75rem;
    font-weight: 400;
    font-size: 0.65em;
    color: #929292;
    display: flex;
    align-items: center;
    div {
      margin-left: 0.25rem;
      cursor: pointer;
    }
  }
`;

export const Submit = styled.button`
  width: 100%;
  aspect-ratio: auto 1/0.125;
  color: #fff;
  background: #5499d9;
  border-radius: 0.625rem;
  font-weight: 600;
  font-size: 0.75em;
  margin-top: 4.375rem;
  cursor: pointer;
`;
