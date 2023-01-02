import styled from '@emotion/styled';

export const Layer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  width: 100%;
  font-family: 'Pretendard';
  font-weight: 800;
  font-size: 36px;
  color: #000000;
  text-align: start;
`;

export const ListWrapper = styled.ul`
  width: 100%;
  height: auto;
`;

export const MoreListBtn = styled.button`
  width: 300px;
  height: 80px;
  background: #2e80cc;
  border-radius: 25px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: #f7f8fc;
  margin: 20px 0 20px 0;
`;

//ServiceListItem

export const ListItemLayer = styled.li`
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
  a {
    width: 300px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    color: #929292;
  }
`;

export const PreviewImg = styled.img`
  width: 353px;
  height: 140px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
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
`;

export const ServiceFixBtn = styled.button`
  width: 144px;
  height: 72px;
  background: #5499d9;
  border-radius: 20px;
  color: #f7f8fc;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  border: none;
  cursor: pointer;
`;

//ModifyMyService
export const ModifyModalBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background: rgba(1, 1, 1, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModifyModalLayer = styled.div`
  width: 1140px;
  height: 680px;
  background: #ffffff;
  border-radius: 25px;
  padding: 40px 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    width: 100%;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    color: #000000;
  }
  form {
    margin-top: 32px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      width: 640px;
      height: 64px;
      background: #ffffff;
      border: 2px solid rgba(146, 146, 146, 0.5);
      border-radius: 15px;
      margin-bottom: 16px;
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      color: #929292;
      padding: 20px;
    }
  }

  button {
    width: 343px;
    height: 80px;
    margin-top: 29px;
    background: #2e80cc;
    border-radius: 40px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    text-align: center;
    color: #f7f8fc;
  }
`;

export const EmptyLisyLayer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 300px;
  border-radius: 20px;
  transition: ease 0.2s;
  box-shadow: inset 0px 2.5px 5px 0px rgba(0, 0, 0, 0.2);
  color: #929292;
  h1 {
    transition: all 0.2s;
    font-size: 20px;
  }
  :hover {
    box-shadow: inset 0px 5px 10px 2px rgba(0, 0, 0, 0.25);
    color: #111111;
    h1 {
      font-size: 40px;
    }
  }
`;
