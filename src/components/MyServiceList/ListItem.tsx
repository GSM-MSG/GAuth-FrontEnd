import Link from 'next/link';
import * as S from './style';

export default function ListItem() {
  return (
    <S.ListItemLayer>
      <S.PreviewImg src="https://www.next-t.co.kr/public/uploads/7b7f7e2138e29e598cd0cdf2c85ea08d.jpg" />
      <S.ServiceTitle>GRIG</S.ServiceTitle>
      <Link href="https://dotori-gsm.com/home">
        <a>https://grig.com</a>
      </Link>
      <S.ServiceFixBtn>수정</S.ServiceFixBtn>
    </S.ListItemLayer>
  );
}
