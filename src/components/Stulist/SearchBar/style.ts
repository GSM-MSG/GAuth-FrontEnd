import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 49px;
  background: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  padding: 0 20px;

  input {
    width: 100%;
    height: 100%;
    font-weight: 400;
    font-size: 14px;
    ::placeholder {
      color: #929292;
    }
  }

  i {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
