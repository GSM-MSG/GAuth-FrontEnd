import ListItem from './ListItem';
import ModifyMyService from './ModifyMyService';
import { ClientListType } from '../../types';
import * as S from './style';
import EmptyList from './EmptyList';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { UserLists } from '../../Atom/Atoms';

export default function MyServiceList() {
  const [modifyItem, setModifyItem] = useState<ClientListType | null>(null);
  const userList = useRecoilValue(UserLists);

  return (
    <S.Layer>
      <S.Title>내가 등록한 서비스</S.Title>
      {userList.length !== 0 ? (
        <S.ListWrapper>
          <>
            {userList.map((listItem, index) => {
              return <ListItem key={index} listData={listItem} />;
            })}
          </>
        </S.ListWrapper>
      ) : (
        <EmptyList />
      )}
      {modifyItem && (
        <ModifyMyService
          modifyItem={modifyItem}
          setModifyItem={() => setModifyItem(null)}
        />
      )}
    </S.Layer>
  );
}
