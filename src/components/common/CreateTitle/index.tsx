import * as S from './style';
import * as SVG from '../../../../public/svg';

interface Props {
  title?: string;
  logo?: boolean;
  subTitle?: string;
  option?: string;
  onClick?: () => void;
}

export default function CreateTitle({
  title,
  logo,
  subTitle,
  option,
  onClick,
}: Props) {
  return (
    <>
      {title && <S.Title>{title}</S.Title>}
      {logo && (
        <S.Logo>
          <SVG.Logo />
        </S.Logo>
      )}
      {subTitle && (
        <S.SubTitle>
          {subTitle}
          {option && <span onClick={onClick}>{option}</span>}
        </S.SubTitle>
      )}
    </>
  );
}
