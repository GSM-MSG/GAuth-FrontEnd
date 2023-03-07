import * as S from './style';

export function LightCube({ color }: { color: string }) {
  const list: Array<number> = [0, 1, 2, 3];
  return (
    <S.cube>
      <S.top />
      <div>
        {list.map((e) => (
          <S.span num={e} key={e} color={color} />
        ))}
      </div>
      <S.bottom />
    </S.cube>
  );
}
