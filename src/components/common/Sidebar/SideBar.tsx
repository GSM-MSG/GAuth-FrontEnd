import { useRecoilState } from 'recoil';
import { Filter } from '../../../Atom/Atoms';
import { FilterList } from '../../../lib/FilterList';
import Item from './Item';
import * as S from './style';
import * as SVG from '../../../../public/svg';
import { useState } from 'react';

export default function SideBar() {
  const [filter, setFilter] = useRecoilState(Filter);
  const [menuActive, setMenuActive] = useState(false);

  const onChange = (name: string, value: string) => {
    setFilter((prev) => {
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
              <SVG.Arrow onClick={() => setMenuActive((prev) => !prev)} />
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
