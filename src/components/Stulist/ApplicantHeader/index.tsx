import Link from 'next/link';
import { useEffect, useState } from 'react';
import SaveXlsx from '../SaveXlsx';
import * as S from './style';
import * as SVG from '../../../../public/svg';
import { useUserList } from '../../../hooks/useUserList';

export default function ApplicantHeader() {
  const [xlxsModal, setXlsxModal] = useState(false);
  const { getUserList } = useUserList({
    defaultUri: '/user/pending',
  });

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <>
      <S.Header>
        <S.Title>
          <Link href="">{'<'}</Link>
          <p>가입요청</p>
        </S.Title>
        <S.SelectBtnWrapper>
          <p>선택 항목 일괄</p>
          <i onClick={() => setXlsxModal(true)}>
            <SVG.FileIcon />
          </i>
        </S.SelectBtnWrapper>
      </S.Header>
      {xlxsModal && <SaveXlsx onClose={() => setXlsxModal(false)} />}
    </>
  );
}
