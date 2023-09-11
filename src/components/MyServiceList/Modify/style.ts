import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  width: 772px;
  aspect-ratio: auto 1/0.6;
  padding: 50px 40px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  gap: 40px;

  @media (max-width: 550px) {
    width: 78vw;
    font-size: 3.6364vw;
  }
`;

export const Section = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-weight: 600;
    font-size: 1.2em;
  }

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
`;

export const ImgContainer = styled.div`
  width: 100%;
  label {
    width: 100%;
    height: 180px;
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

  svg {
    cursor: pointer;
  }
`;
