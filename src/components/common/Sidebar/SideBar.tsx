import { useRecoilState } from 'recoil';
import { Filter } from '../../../Atom/Atoms';
import { FilterList } from '../../../lib/FilterList';
import Item from './Item';
import * as S from './style';

export default function SideBar() {
  const [filter, setFilter] = useRecoilState(Filter);

  const onChange = (grade: string, value: string) => {
    setFilter((prev) => {
      return { ...prev, [grade]: value };
    });
  };

  return (
    <S.SideBar>
      {FilterList.map((e) => (
        <S.FilterWrapper key={e.title}>
          <h3>{e.title}</h3>
          <div>
            {e.list.map((i, idx) => (
              <Item
                key={idx}
                title={e.title}
                select={filter[e.type]}
                type={e.type}
                listValue={i}
                onClick={() => onChange(e.type, i)}
              />
            ))}
          </div>
        </S.FilterWrapper>
      ))}
    </S.SideBar>
  );
}
