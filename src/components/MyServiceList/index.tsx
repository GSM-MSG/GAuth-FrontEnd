import ListItem from './ListItem';
import ModifyMyService from './ModifyMyService';
import { ClientListType } from '../../types';
import * as S from './style';
import EmptyList from './EmptyList';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { User } from '../../Atom/Atoms';

export default function MyServiceList() {
  const [modifyItem, setModifyItem] = useState<ClientListType | null>(null);
  const user = useRecoilValue(User);

  return (
    <S.Layer>
      <S.Title>내가 등록한 서비스</S.Title>
      {user.clientList.length !== 0 ? (
        <S.ListWrapper>
          <>
            {user.clientList.map((listItem, index) => {
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
