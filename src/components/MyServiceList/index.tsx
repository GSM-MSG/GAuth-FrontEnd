import ListItem from './ListItem';
import ModifyMyService from './Modify';
import * as S from './style';
import EmptyList from './EmptyList';
import { useRecoilState, useRecoilValue } from 'recoil';
import { FixService, isDelete, ServiceCheckList, User } from '../../Atom/Atoms';
import Portal from '../common/Portal';
import DeleteService from './Delete';
import { useEffect } from 'react';

export default function MyServiceList() {
  const [fix, setFix] = useRecoilState(FixService);
  const [deleteState, setDeleteState] = useRecoilState(isDelete);
  const [serviceCheckList, setServiceCheckList] =
    useRecoilState(ServiceCheckList);
  const user = useRecoilValue(User);
  const { type } = fix;

  useEffect(() => {
    return () => {
      setDeleteState(false);
      setServiceCheckList([]);
    };
  }, [user.clientList]);

  return (
    <S.Layer>
      <S.TitleContainer>
        {deleteState ? (
          <S.Title>서비스 삭제</S.Title>
        ) : (
          <S.Title>내가 등록한 서비스</S.Title>
        )}

        {user.clientList.length !== 0 && deleteState ? (
          <S.DeleteContainer>
            <S.Delete
              onClick={() =>
                serviceCheckList.length > 0 &&
                setFix((prev) => {
                  return {
                    ...prev,
                    type: 'delete',
                  };
                })
              }
            >
              삭제
            </S.Delete>
            <S.Delete
              onClick={() => {
                setDeleteState(false);
                setServiceCheckList([]);
              }}
            >
              취소
            </S.Delete>
          </S.DeleteContainer>
        ) : (
          <S.Delete onClick={() => setDeleteState(true)}>삭제</S.Delete>
        )}
      </S.TitleContainer>
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
