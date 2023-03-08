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
  width: 1200px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  @media (max-width: 1400px) {
    width: 100%;
    margin: 0 50px;
  }
  @media (max-width: 600px) {
    font-size: 3.3333vw;
  }
`;

export const TitleSection = styled.div`
  width: 100%;
  margin-top: 120px;
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
`;

export const ListTableWrapper = styled.ul`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 0 20px;
  @media (max-width: 1400px) {
    justify-content: space-around;
    gap: 0 10px;
  }
  
`;

export const ListItemLayer = styled.div`
  width: 285px;
  aspect-ratio: auto 1 / 0.888;
  display: flex;
  flex-direction: column;
  @media (max-width: 1400px) {
    width: 19vw;
  }
  @media (max-width: 1100px) {
    width: 24vw;
  }
  @media (max-width: 800px) {
    width: 40vw;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const PreviewImg = styled.div`
  width: 100%;
  aspect-ratio: auto 1 / 0.481;
  border: 1px solid #dddddd;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  z-index: -1;
`;

export const ServiceTitle = styled.div`
  h3 {
    margin-top: 16px;
    font-weight: 500;
    font-size: 15px;
    color: #000000;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  a {
    margin-top: 8px;
    display: inline-block;
    font-weight: 500;
    font-size: 13px;
    color: #929292;
    :hover {
      color: #5499d9;
    }
  }
`;
