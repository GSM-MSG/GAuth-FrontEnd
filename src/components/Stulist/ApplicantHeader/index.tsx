import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { StuList } from '../../../Atom/Atoms';
import useFetch from '../../../hooks/useFetch';
import { stuListType } from '../../../types/stuListType';
import SaveXlsx from '../SaveXlsx';
import * as S from './style';
import * as SVG from '../../../../public/svg';
import { useRouter } from 'next/router';

export default function ApplicantHeader() {
  const setStulist = useSetRecoilState(StuList);
  const [xlxsModal, setXlsxModal] = useState(false);
  const { fetch } = useFetch<stuListType[]>({
    url: '/user/pending',
    method: 'get',
    onSuccess: (data) => {
      setStulist(data);
    },
  });

  useEffect(() => {
    fetch();
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
