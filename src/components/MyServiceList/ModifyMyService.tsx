import * as S from './style';

export default function ModifyMyService() {
  return (
    <S.ModifyModalBackGround>
      <S.ModifyModalLayer>
        <h1>서비스 정보 수정</h1>
        <form>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </form>
        <button>확인</button>
      </S.ModifyModalLayer>
    </S.ModifyModalBackGround>
  );
}
