import * as S from './style';
import * as SVG from '../../../public/svg';
import { useSetRecoilState } from 'recoil';
import { Search } from '../../Atom/Atoms';
import { ChangeEvent } from 'react';

export default function NavBar() {
  const setSearch = useSetRecoilState(Search);

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <S.Nav>
      <input
        type="text"
        placeholder="검색어를 입력해주세요."
        onChange={onChange}
      />
      <i>
        <SVG.SearchIcon />
      </i>
    </S.Nav>
  );
}
