import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import XIcon from '../../../public/svg/XIcon';
import {
  Search,
  StuList,
} from '../../Atom/Atoms';
import { useUserList } from '../../hooks/useUserList';
import Portal from '../common/Portal';
import SearchBar from '../common/SearchBar';
import * as S from './style';
import * as SVG from '../../../public/svg/AddPerson';
import useFetch from '../../hooks/useFetch';
import { toast } from 'react-toastify';

interface Props {
  onClose: () => void;
  userId: number;
  modifyId: string;
}

export default function ServiceOwnerList({ onClose, userId, modifyId }: Props) {
  const search = useRecoilValue(Search);
  const stuList = useRecoilValue(StuList);

  const { fetch } = useFetch({
    url: `client/${modifyId}/co-worker`,
    method: 'patch',
    onSuccess: () => {
      onClose();
    },
    onFailure:(error) => {
      let code = error.response?.status;
      if(code === 400) toast.error("이미 추가되어있는 공동작업자 입니다")
    }
  });
  
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
          <h1>공동작업자 추가</h1>
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
                .filter((e) => e.name?.includes(search) && e.id !== userId)
                .map((e, idx) => (
                  <tr key={idx}>
                    <td>{e.name}</td>
                    <td>{e.grade}</td>
                    <td>{e.classNum}</td>
                    <td>{e.num}</td>
                    <td>
                      <button
                        onClick={() => {
                          fetch({ userId: e.id });
                        }}
                      >
                        <SVG.AddPerson/>
                        추가하기
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
