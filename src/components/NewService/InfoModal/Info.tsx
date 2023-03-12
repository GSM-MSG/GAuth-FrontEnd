import { toast } from 'react-toastify';
import * as S from './style';
import * as SVG from '../../../../public/svg';

interface Props {
  title: string;
  value: string;
  copy?: boolean;
}

export default function Info({ title, value, copy }: Props) {
  const CopyText = (data: string) => {
    navigator.clipboard.writeText(data);
    toast.info('클립보드에 복사되었습니다.');
  };

  return (
    <S.Info htmlFor={value}>
      <p>{title}</p>
      <input id={value} value={value} readOnly />
      {copy && (
        <span
          onClick={() => {
            CopyText(value);
          }}
        >
          <SVG.CopyIcon />
        </span>
      )}
    </S.Info>
  );
}
