import ListItem from './ListItem';
import ModifyMyService from './ModifyMyService';
import * as S from './style';

export default function MyServiceList() {
  return (
    <S.Layer>
      <S.Title>내가 등록한 서비스</S.Title>
      <S.ListWrapper>
        <ListItem />
      </S.ListWrapper>
      <S.MoreListBtn>더보기</S.MoreListBtn>
      <ModifyMyService />
    </S.Layer>
  );
}
