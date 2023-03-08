import Link from 'next/link';
import * as S from './style';

export default function EmptyList() {
  return (
    <Link href="/newservice">
      <S.EmptyLisyLayer>
        <h1>서비스 등록하러 가기.</h1>
      </S.EmptyLisyLayer>
    </Link>
  );
}
