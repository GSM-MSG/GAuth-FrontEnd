import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import XIcon from '../../../public/svg/XIcon';
import {
  Search,
  ServiceOwnerUserId,
  ServiceOwnerModal,
  StuList,
} from '../../Atom/Atoms';
import { useUserList } from '../../hooks/useUserList';
import Portal from '../common/Portal';
import SearchBar from '../common/SearchBar';
import * as S from './style';

interface Props {
  onClose: () => void;
}

export default function ServiceOwnerList({ onClose }: Props) {
  const setServiceOwnerModal = useSetRecoilState(ServiceOwnerModal);
  const search = useRecoilValue(Search);
  const stuList = useRecoilValue(StuList);
  const setServiceOwnerUserId = useSetRecoilState(ServiceOwnerUserId);

  const { getUserList } = useUserList({
    defaultUri: `/user/user-list?grade=0&classNum=0&keyword=&role=ROLE_STUDENT`,
  });

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <Portal onClose={onClose}>
      <S.Container>
        <S.TitleWrapper>
          <h1>소유자 이전</h1>
          <div onClick={onClose}>
            <XIcon />
          </div>
        </S.TitleWrapper>
        <SearchBar placeholder="이름으로 검색하기..." />
        <S.TableWrapper>
          <S.Table>
            <thead>
              <tr>
                <th>이름</th>
                <th>학년</th>
                <th>반</th>
                <th>번호</th>
              </tr>
            </thead>
            <tbody>
              {stuList
                .filter((e) => e.name?.includes(search))
                .map((e, idx) => (
                  <tr key={idx}>
                    <td>{e.name}</td>
                    <td>{e.grade}</td>
                    <td>{e.classNum}</td>
                    <td>{e.num}</td>
                    <td>
                      <button
                        onClick={() => {
                          setServiceOwnerModal('assignment');
                          setServiceOwnerUserId(e.id);
                        }}
                      >
                        권한 양도
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </S.Table>
        </S.TableWrapper>
      </S.Container>
    </Portal>
  );
}
