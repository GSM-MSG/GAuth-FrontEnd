import { useState } from 'react';
import { useRecoilState } from 'recoil';
import * as SVG from '../../../../public/svg';
import { Filter } from '../../../Atom/Atoms';
import { FilterList } from '../../../lib/FilterList';
import { FilterOptionType } from '../../../types/components/Sidebar';
import Item from './Item';
import * as S from './style';

export default function SideBar() {
  const [filter, setFilter] = useRecoilState(Filter);
  const [menuActive, setMenuActive] = useState(false);

  const onChange = (name: FilterOptionType, value: string) => {
    return setFilter((prev) => {
      if (prev[name] === value && name !== 'role')
        return { ...prev, [name]: '0' };
      return { ...prev, [name]: value };
    });
  };

  return (
    <S.SideBar>
      {FilterList.map((e) => (
        <S.FilterWrapper key={e.title}>
          <S.RoleWrapper
            menuActive={menuActive}
            select={e.type === filter.role}
          >
            <h3 onClick={() => onChange('role', e.type)}>{e.title}</h3>
            {e.type === 'ROLE_STUDENT' && (
              <div onClick={() => setMenuActive((prev) => !prev)}>
                <SVG.Arrow />
              </div>
            )}
          </S.RoleWrapper>
          {menuActive && (
            <S.MenuWrapper>
              {e.gradelist.map((i, idx) => (
                <Item
                  key={`grade__${idx}`}
                  title={'학년'}
                  select={filter.grade}
                  type={e.type}
                  listValue={i}
                  onClick={() => onChange('grade', i)}
                />
              ))}
              {e.classlist.map((i, idx) => (
                <Item
                  key={`class__${idx}`}
                  title={'반'}
                  select={filter.classNum}
                  type={e.type}
                  listValue={i}
                  onClick={() => onChange('classNum', i)}
                />
              ))}
            </S.MenuWrapper>
          )}
        </S.FilterWrapper>
      ))}
    </S.SideBar>
  );
}
