import * as S from './style';

export function LightCube({ color }: { color: string }) {
  const list: Array<number> = [0, 1, 2, 3];
  return (
    <S.cube>
      <S.top></S.top>
      <div>
        {list.map((e) => {
          return <S.span num={e} key={e} color={color}></S.span>;
        })}
      </div>
      <S.bottom></S.bottom>
    </S.cube>
  );
}
