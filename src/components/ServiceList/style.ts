import styled from '@emotion/styled';

export const Positioner = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Layer = styled.div`
  width: 65vw;
  height: 100%;
  @media (max-width: 1300px) {
    width: 400px;
  }
`;

export const TitleSection = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  h1 {
    font-family: 'Pretendard';
  }
  h3 {
    color: #929292;
  }
`;

//ListTable
export const ListTableLayer = styled.ul`
  margin-top: 68px;
  width: 1200px;
  height: auto;
`;

export const ListTitle = styled.li`
  width: 100%;
  display: grid;
  margin-bottom: 16px;
  grid-template-columns: 30% 30% 40%;
  a {
    text-align: center;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    color: #929292;
  }
`;

export const ListWrapper = styled.ul`
  width: 100%;
  height: auto;
`;

export const ListItem = styled.li`
  width: 100%;
  height: 200px;
  margin-top: 32px;
  background: #ffffff;
  box-shadow: -10px -10px 25px rgba(255, 255, 255, 0.75),
    10px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ListItemLayer = styled.li`
  width: 100%;
  height: 200px;
  margin-bottom: 40px;
  background: #ffffff;
  box-shadow: -10px -10px 25px rgba(255, 255, 255, 0.75),
    10px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  a {
    width: 400px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    color: #929292;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const PreviewImg = styled.img`
  width: 353px;
  height: 140px;
  border-radius: 25px;
  object-fit: contain;
`;

export const ServiceTitle = styled.h3`
  width: 220px;
  height: auto;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: #000000;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
