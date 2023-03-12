import ListItem from './ListItem';
import ModifyMyService from './Modify';
import * as S from './style';
import EmptyList from './EmptyList';
import { useRecoilState, useRecoilValue } from 'recoil';
import { FixService, User } from '../../Atom/Atoms';
import Portal from '../common/Portal';
import DeleteService from './Delete';

export default function MyServiceList() {
  const [fix, setFix] = useRecoilState(FixService);
  const user = useRecoilValue(User);
  const { type } = fix;

  return (
    <S.Layer>
      <S.Title>내가 등록한 서비스</S.Title>
      {user.clientList.length !== 0 ? (
        <S.ListWrapper>
          {user.clientList.map((listItem, index) => {
            return <ListItem key={index} listData={listItem} />;
          })}
        </S.ListWrapper>
      ) : (
        <EmptyList />
      )}
      {fix.type && (
        <Portal
          onClose={() =>
            setFix((prev) => {
              return {
                ...prev,
                type: '',
              };
            })
          }
        >
          <div>
            {type === 'modify' && <ModifyMyService />}
            {type === 'delete' && <DeleteService />}
          </div>
        </Portal>
      )}
    </S.Layer>
  );
}
