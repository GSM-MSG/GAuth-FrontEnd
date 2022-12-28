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
  gap: 10px;
  h1 {
    font-family: 'Pretendard';
  }
  h3 {
    color: #929292;
  }
`;

export const ProfileSection = styled.div`
  width: 100%;
  height: 178px;
  display: flex;
  margin-top: 80px;
`;

export const UpLoadProfileContainter = styled.div`
  display: flex;
`;

export const ProfileSVGWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  label {
    cursor: pointer;
    i {
      position: absolute;
      top: 130px;
      left: 130px;
    }
    :hover {
      i {
        svg {
          path {
            fill: #868e96;
          }
        }
      }
    }
  }
`;

export const Profile = styled.img`
  margin: 0px;
  padding: 2px;
  width: 178px;
  height: 178px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  background: #fff;
`;

export const PrivacySection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 47px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    h1 {
      font-size: 45px;
      font-weight: 700;
      color: #000000;
    }
    p {
      font-size: 27px;
      font-weight: 600;
      color: #000000;
    }
  }
  h3 {
    font-size: 27px;
    font-weight: 300;
    color: #929292;
  }
`;
