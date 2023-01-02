import Link from 'next/link';
import { useState } from 'react';
import * as S from './style';

export default function EmptyList() {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <Link href="/newservice">
      <S.EmptyLisyLayer
        onMouseEnter={() => setShowMessage(true)}
        onMouseLeave={() => setShowMessage(false)}
      >
        <h1>
          {showMessage
            ? '서비스 등록하로 가기'
            : '아직 등록된 서비스가 없습니다'}
          .
        </h1>
      </S.EmptyLisyLayer>
    </Link>
  );
}
