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
        id={type + listValue}
        name={type}
        checked={select === listValue}
        readOnly
        onClick={onClick}
      />
      <S.SideTap htmlFor={type + listValue}>
        {listValue} {title}
      </S.SideTap>
    </>
  );
}
