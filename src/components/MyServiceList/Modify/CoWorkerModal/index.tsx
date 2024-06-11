import { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import XIcon from '../../../../../public/svg/XIcon';
import { Search, StuList } from '../../../../Atom/Atoms';
import Portal from '../../../common/Portal';
import SearchBar from '../../../common/SearchBar';
import * as S from './style';
import useFetch from '../../../../hooks/useFetch';
import { toast } from 'react-toastify';
import DeleteAssignment from '../DeleteAssignment';
import Assignment from '../Assignment';
import {
  ServiceOwnerModal,
  ServiceDeleteModal,
  ServiceRetrieveModal,
} from '../../../../Atom/Atoms';

interface Props {
  onClose: () => void;
  modifyId: string;
}

interface Worker {
  userId: number;
}

export default function ServiceCoWorkersList({ onClose, modifyId }: Props) {
  const search = useRecoilValue(Search);
  const stuList = useRecoilValue(StuList);
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [, setServiceOwnerModal] =
    useRecoilState(ServiceOwnerModal);
  const [, setServiceDeleteModal] =
    useRecoilState(ServiceDeleteModal);
  const [, setServiceRetrieveModal] =
    useRecoilState(ServiceRetrieveModal);

  const { fetch: getCoWorkers } = useFetch({
    url: `/client/${modifyId}/co-worker`,
    method: 'get',
    onSuccess: (data: Worker[]) => {
      setWorkers(data);
    },
    onFailure: () => {
      toast.error('공동작업자를 정상적으로 불러오지 못했습니다.');
    },
  });

  useEffect(() => {
    getCoWorkers();
  }, [modifyId]);

  const closeModal = () => {
    setServiceOwnerModal('');
    setServiceDeleteModal('');
    setServiceRetrieveModal('');
  };

  const roleSwitcher = (event: ChangeEvent<HTMLSelectElement>, id: number) => {
    const select = event.target.value;
    if (select === 'delete') {
      setServiceDeleteModal('assignment');
      return (
        <Assignment onClose={closeModal} modifyId={modifyId} userId={id} />
      );
    } else if (select === 'owner') {
      setServiceOwnerModal('assignment');
      return (
        <DeleteAssignment
          onClose={closeModal}
          modifyId={modifyId}
          userId={id}
        />
      );
    }
  };

  return (
    <Portal onClose={onClose}>
      <S.Container>
        <S.TitleWrapper>
          <h1>공동작업자 목록</h1>
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
                .filter((e) => workers.some((person) => e.id === person.userId))
                .map((e) => (
                  <tr key={e.id}>
                    <td>{e.name}</td>
                    <td>{e.grade}</td>
                    <td>{e.classNum}</td>
                    <td>{e.num}</td>
                    <td>
                      <S.Select
                        id="role"
                        onChange={(event) => {
                          roleSwitcher(event, e.id);
                        }}
                        value={'coworker'}
                      >
                        <option value="owner">소유자</option>
                        <option value="coworker">공동작업자</option>
                        <option value="delete">삭제</option>
                      </S.Select>
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
