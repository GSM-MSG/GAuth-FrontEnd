import ListTable from './ListTable';
import * as S from './style';

export default function ServiceList() {
  return (
    <S.Layout>
      <S.Wrapper>
        <S.TitleSection>
          <h1>GAUTH를 이용하는 서비스에요!</h1>
          <h3>이런 서비스들도 GAUTH를 이용해요!</h3>
        </S.TitleSection>
        <ListTable />
      </S.Wrapper>
    </S.Layout>
  );
}
