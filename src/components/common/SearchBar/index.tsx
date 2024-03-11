import * as S from './style';
import * as SVG from '../../../../public/svg';
import { useSetRecoilState } from 'recoil';
import { Search } from '../../../Atom/Atoms';
import { ChangeEvent } from 'react';

interface Props {
  placeholder: string;
}

export default function SearchBar({ placeholder }: Props) {
  const setSearch = useSetRecoilState(Search);

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <S.Wrapper>
      <input type="text" placeholder={placeholder} onChange={onChange} />
      <i>
        <SVG.SearchIcon />
      </i>
    </S.Wrapper>
  );
}
