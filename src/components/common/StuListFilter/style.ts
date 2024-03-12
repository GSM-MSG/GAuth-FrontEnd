import styled from '@emotion/styled';

type RoleWrapperType = {
  menuActive: boolean;
  select: boolean;
};

export const SideBar = styled.div`
  position: sticky;
  width: 7.5rem;
  height: max-content;
  top: 0.9375rem;
  background: #ffffff;
  border: 0.0625rem solid #e4e4e4;
  border-radius: 0.625rem;
  padding: 1.5625rem 0.9375rem 1.5625rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const SideInput = styled.input`
  display: none;

  &:checked + label {
    color: #474747;
  }
`;

export const SideTap = styled.label`
  font-weight: 600;
  font-size: 0.9375rem;
  cursor: pointer;
  color: #a2a2a2;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const RoleWrapper = styled.div<RoleWrapperType>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: ${(props) => (props.select ? '#1c1c1c' : '#a2a2a2')};
    font-weight: 600;
    font-size: 1rem;
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
  margin-left: 0.875rem;
  gap: 0.75rem;

  label:nth-of-type(3) {
    margin-bottom: 0.5rem;
  }
`;
