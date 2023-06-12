import * as S from './style';

interface Props {
  title: string;
  type: string;
  listValue: string;
  select: string;
  onClick: () => void;
}

export default function Item({
  title,
  listValue,
  type,
  select,
  onClick,
}: Props) {
  return (
    <>
      <S.SideInput
        type="radio"
        id={title + listValue}
        name={title}
        checked={select === listValue}
        readOnly
        onClick={onClick}
      />
      <S.SideTap htmlFor={title + listValue}>
        {listValue} {title}
      </S.SideTap>
    </>
  );
}
