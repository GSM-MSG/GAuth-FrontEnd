import styled from '@emotion/styled';

export const SideBar = styled.div`
  position: sticky;
  width: 120px;
  height: 380px;
  top: 15px;
  margin: 0;
  left: 0;
  background: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  padding: 20px 20px 36px;
  display: flex;
  flex-direction: column;
  gap: 33px;

  @media (max-width: 1100px) {
    position: relative;
    width: 100%;
    height: 50px;
    flex-direction: row;
    padding: 0;
    justify-content: center;
    align-items: center;
  }
`;

export const SideInput = styled.input`
  display: none;

  &:checked + label {
    color: #474747;
  }
`;

export const SideTap = styled.label`
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  color: #a2a2a2;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;

  h3 {
    color: #1c1c1c;
    font-weight: 600;
    font-size: 15px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 17px;
  }

  @media (max-width: 1100px) {
    flex-direction: row;
    div {
      flex-direction: row;
    }
  }
`;
