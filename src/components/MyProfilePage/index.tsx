import * as S from './style';
import MyServiceList from '../MyServiceList';
import Profile from './Profile';

export default function MyProfilePage() {
  return (
    <S.Layout>
      <S.Wrapper>
        <S.TitleSection>
          <h1>마이페이지&등록한 서비스 관리</h1>
          <h3>여기에서 등록해주신 서비스를 쉽게 관리하실 수 있어요!</h3>
        </S.TitleSection>
        <Profile />
        <S.Hr />
        <MyServiceList />
      </S.Wrapper>
    </S.Layout>
  );
}
