import styled from '@emotion/styled';

export const Layer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  color: #000000;
  text-align: start;
`;

export const ListWrapper = styled.ul`
  width: 100%;
  margin: 30px 0 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 14px;

  @media (max-width: 1100px) {
    justify-content: space-around;
    gap: 10px 1.2727vw;
  }
`;

//ServiceListItem

export const ListItemLayer = styled.li`
  width: 294px;
  aspect-ratio: auto 1 / 0.49;
  display: flex;
  background: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 9px;
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

export const PreviweWrapper = styled.div`
  width: 100%;
  aspect-ratio: auto 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  i {
    cursor: pointer;

    svg {
      position: absolute;
      top: 14px;
      left: 17px;
    }
  }
`;

export const ItemController = styled.div`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  width: 73px;
  aspect-ratio: auto 1 / 0.986;
  border-radius: 7px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(0%);
    }
    100% {
      opacity: 1;
      transform: translateY(-50%);
    }
  }

  p {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 9px;
    font-weight: 500;
    font-size: 13px;
    color: #d1d1d1;
    cursor: pointer;
    transition: 0.5s;

    :hover {
      color: #ffff;
    }
  }

  @media (max-width: 1100px) {
    width: 6vw;
  }

  @media (max-width: 800px) {
    width: 73px;
  }
`;

export const PreviewImg = styled.div`
  position: relative;
  width: 124px;
  aspect-ratio: auto 1 / 0.355;
  overflow: hidden;
`;

export const ServiceInfoWrapper = styled.div`
  width: 100%;
  aspect-ratio: auto 1 / 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    color: #929292;
    font-weight: 500;
    font-size: 13px;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    :hover {
      color: #5499d9;
    }
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 13px;
  line-height: 16px;
  color: #000000;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const EmptyLisyLayer = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 300px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 20px;
  transition: ease 0.2s;
  box-shadow: inset 0px 2.5px 5px 0px rgba(0, 0, 0, 0.2);
  color: #929292;

  h1 {
    transition: all 0.2s;
    font-size: 40px;
    margin: 0 100px;
  }

  :hover {
    box-shadow: inset 0px 5px 10px 2px rgba(0, 0, 0, 0.25);
    color: #111111;

    h1 {
      font-size: 50px;
    }
  }
`;
