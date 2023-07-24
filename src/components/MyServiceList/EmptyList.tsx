import Link from 'next/link';
import * as S from './style';

export default function EmptyList() {
  return (
    <Link href="/newservice">
      <S.EmptyLisyLayer>
        <h1>앗! 아직 등록하신 서비스가 없어요!</h1>
        <p>서비스 등록하러 가기</p>
      </S.EmptyLisyLayer>
    </Link>
  );
}
