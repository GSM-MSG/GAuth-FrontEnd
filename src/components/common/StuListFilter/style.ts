import styled from '@emotion/styled';

type RoleWrapperType = {
  menuActive: boolean;
  select: boolean;
};

export const SideBar = styled.div`
  position: sticky;
  width: 120px;
  height: max-content;
  top: 15px;
  background: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  padding: 25px 13px 25px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SideInput = styled.input`
  display: none;

  &:checked + label {
    color: #474747;
  }
`;

export const SideTap = styled.label`
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  color: #a2a2a2;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RoleWrapper = styled.div<RoleWrapperType>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: ${(props) => (props.select ? '#1c1c1c' : '#a2a2a2')};
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
  }
  svg {
    transform: ${(props) => !props.menuActive && 'rotate(0.75turn)'};
    cursor: pointer;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 14px;
  gap: 12px;

  label:nth-of-type(3) {
    margin-bottom: 8px;
  }
`;
