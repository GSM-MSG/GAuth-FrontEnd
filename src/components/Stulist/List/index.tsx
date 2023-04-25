import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ApproveId, Search, StuList } from '../../../Atom/Atoms';
import * as S from './style';
import useFetch from '../../../hooks/useFetch';
import { useEffect, useState } from 'react';

interface Props {
  type: boolean;
}

export default function List({ type }: Props) {
  const setApproveId = useSetRecoilState(ApproveId);
  const [pedingId, setPedIngId] = useState(0);
  const stuList = useRecoilValue(StuList);
  const search = useRecoilValue(Search);
  const { fetch } = useFetch({
    url: `user/reject/${pedingId}`,
    method: 'DELETE',
  });

  useEffect(() => {
    if (!pedingId) return;
    const result = confirm('정말 거절 하실 건가요?');
    if (result) fetch();
    return setPedIngId(0);
  }, [pedingId]);

  return (
    <S.TableWrapper>
      <S.Table modeType={type}>
        <thead>
          <tr>
            {!type && (
              <>
                <th>이름</th>
                <th>학년</th>
                <th>반</th>
                <th>번호</th>
              </>
            )}
            <th>이메일</th>
            {type && <th>&nbsp;</th>}
          </tr>
        </thead>
        <tbody>
          {stuList
            .filter((e) => (e.email + e.name).includes(search))
            .map((e, index) => (
              <tr key={index}>
                {!type && (
                  <>
                    <td>{e.name}</td>
                    <td>{e.grade}</td>
                    <td>{e.classNum}</td>
                    <td>{e.num}</td>
                  </>
                )}
                <td>{e.email}</td>
                {type && (
                  <td>
                    <span>
                      <S.SelecTypeBtn
                        colorType={true}
                        onClick={() => {
                          setApproveId(e.id);
                        }}
                      >
                        수락
                      </S.SelecTypeBtn>
                      <S.SelecTypeBtn
                        colorType={false}
                        onClick={() => setPedIngId(e.id)}
                      >
                        거절
                      </S.SelecTypeBtn>
                    </span>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </S.Table>
    </S.TableWrapper>
  );
}
