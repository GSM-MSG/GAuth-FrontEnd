import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import XIcon from '../../../../public/svg/XIcon';
import {
  Search,
  ServiceOwnerUserId,
  ServiceOwnerModal,
  StuList,
  selectedUsersState,
} from '../../../Atom/Atoms';
import { useUserList } from '../../../hooks/useUserList';
import Portal from '../../common/Portal';
import SearchBar from '../../common/SearchBar';
import * as S from './style';
import { AddBtn } from '../../../../public/svg/AddBtn';
import { AddCompleteBtn } from '../../../../public/svg/AddCompleteBtn';

interface Props {
  onClose: () => void;
  userId: number;
  isAdd: boolean;
}

export default function ServiceOwnerList({ onClose, userId, isAdd }: Props) {
  const setServiceOwnerModal = useSetRecoilState(ServiceOwnerModal);
  const search = useRecoilValue(Search);
  const stuList = useRecoilValue(StuList);
  const setServiceOwnerUserId = useSetRecoilState(ServiceOwnerUserId);
  const setSelectedUsers = useSetRecoilState(selectedUsersState);
  const selectedUsers = useRecoilValue(selectedUsersState);

  const { getUserList } = useUserList({
    defaultUri: `/user/user-list?grade=0&classNum=0&keyword=&role=ROLE_STUDENT`,
  });

  useEffect(() => {
    getUserList();
  }, []);

  const handleAddUser = (id: number, name: string, profileUrl: string) => {
    if (!isUserSelected(id)) {
      setSelectedUsers((prev) => [...prev, { id, name, profileUrl }]);
    } else {
      setSelectedUsers((prev) => prev.filter((user) => user.id !== id));
    }
  };

  const isUserSelected = (id: number) => {
    return selectedUsers.find((user) => user.id === id);
  };

  const filteredStuList = isAdd
    ? stuList.filter((e) => e.name?.includes(search) && e.id !== userId)
    : stuList.filter((e) => isUserSelected(e.id));

  return (
    <Portal onClose={onClose}>
      <S.Container>
        <S.TitleWrapper>
          {isAdd ? <h1>공동작업자 추가</h1> : <h1>공동작업자 목록</h1>}
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
              {filteredStuList.map((e, idx) => (
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
                        if (e.name) {
                          handleAddUser(e.id, e.name, e.profileUrl);
                        }
                      }}
                    >
                      {isAdd ? (
                        isUserSelected(e.id) ? (
                          <>
                            <AddCompleteBtn />
                            추가완료
                          </>
                        ) : (
                          <>
                            <AddBtn />
                            추가하기
                          </>
                        )
                      ) : (
                        <p>공동작업자</p>
                      )}
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
