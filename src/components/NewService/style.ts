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
  width: 1010px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;

  @media (max-width: 1200px) {
    width: 750px;
  }

  @media (max-width: 850px) {
    width: 352px;
  }

  @media (max-width: 550px) {
    font-size: 3.6364vw;
    width: 100%;
    margin: 0 50px;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 40px;
`;

export const TitleSection = styled.div`
  width: 100%;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 800px) {
    height: calc(100% - 190px);
    margin-bottom: 100px;
  }
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
  p {
    font-weight: 400;
    font-size: 0.65em;
    color: #929292;
    display: flex;
    align-items: center;
    margin-top: 4px;
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

export const InputContainer = styled.div`
  max-width: 352px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-top: 53px;

  span {
    margin-top: 28px;
    font-weight: 400;
    font-size: 0.65em;
    color: #929292;
    display: flex;
    align-items: center;
    div {
      margin-left: 4px;
      cursor: pointer;
    }
  }
`;

export const OwnerButton = styled.button`
  display: none;
  width: 125px;
  height: 40px;
  cursor: pointer;
  background: none;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  color: #8c8c8c;
  font-size: 16px;

  @media (max-width: 850px) {
    display: block;
  }
`;

export const Submit = styled.button`
  width: 100%;
  aspect-ratio: auto 1/0.125;
  color: #fff;
  background: #5499d9;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.75em;
  margin-top: 70px;
  cursor: pointer;
`;

export const ManagerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;

  p {
    font-weight: 400;
    font-size: 0.65em;
    color: #929292;
    display: flex;
    align-items: center;
  }
`;

export const SeeMoreCollaborators = styled(ManagerWrapper)`
  padding: 16px 0;
  border-bottom: 1px solid var(--Theme-outline, #e0e0e0);
`;

export const Add = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 4px;

  padding: 0.5rem 0.75rem;
  border-radius: 0.625rem;
  border: 1px solid #3f99ee;

  p {
    color: #3f99ee;
  }
`;

export const Title = styled.div`
  h1 {
    font-weight: 600;
    font-size: 1.2em;
  }
  h2 {
    color: #292929;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
  }
`;

export const CollaboratorWrapper = styled.div`
  width: 100%;
  margin-top: 70px;

  @media (max-width: 850px) {
    display: none;
  }
`;

export const MemberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
  margin-top: 16px;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const Member = styled.div`
  display: flex;
  width: calc(50% - 8px);
  font-size: 14px;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  background: #fff;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  img {
    border-radius: 100%;
    object-fit: cover;
  }
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const Circle = styled.div<{ background?: string }>`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background: background;
`;

export const Select = styled.select`
  width: 80px;
`;
