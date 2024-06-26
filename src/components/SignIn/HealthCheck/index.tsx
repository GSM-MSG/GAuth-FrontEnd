import CreateTitle from '../../common/CreateTitle';
import * as S from './style';
import Detail from '../../common/Detail';

type HealthCheckProps = {
  healthcheck: () => void;
};

export default function HealthCheck({ healthcheck }: HealthCheckProps) {
  return (
    <S.Layout style={{ height: '97vh' }}>
      <S.Wrapper>
        <CreateTitle title={'뭐든 단 한번으로'} logo={true} />
        <S.Form>
          <S.SuccessWrapper>
            <h1>현재 서버가 꺼져있습니다.</h1>
            <p>관리자에게 문의 해 주세요</p>
          </S.SuccessWrapper>
        </S.Form>
        <Detail discord="th._.castle" />
        <S.SubmitWrapper>
          <button onClick={() => healthcheck()}>확인</button>
        </S.SubmitWrapper>
      </S.Wrapper>
    </S.Layout>
  );
}
