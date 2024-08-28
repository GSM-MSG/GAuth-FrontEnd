import { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import XIcon from '../../../../../public/svg/XIcon';
import { Search, StuList } from '../../../../Atom/Atoms';
import Portal from '../../../common/Portal';
import SearchBar from '../../../common/SearchBar';
import * as S from './style';
import useFetch from '../../../../hooks/useFetch';
import { toast } from 'react-toastify';
import {
  ServiceOwnerModal,
  ServiceDeleteModal,
  ServiceRetrieveModal,
} from '../../../../Atom/Atoms';

interface Props {
  onClose: () => void;
  modifyId: string;
  setStuId: (id: number) => void;
}

interface Worker {
  userId: number;
}

export default function ServiceCoWorkersList({ onClose, modifyId, setStuId }: Props) {
  const search = useRecoilValue(Search);
  const stuList = useRecoilValue(StuList);
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [serviceOwnerModal, setServiceOwnerModal] =
    useRecoilState(ServiceOwnerModal);
  const [serviceDeleteModal, setServiceDeleteModal] =
    useRecoilState(ServiceDeleteModal);
  const [serviceRetrieveModal, setServiceRetrieveModal] =
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

  const roleSwitcher = (event: ChangeEvent<HTMLSelectElement>, id: number) => {
    const select = event.target.value;
    setStuId(id);
    if (select === 'delete') {
      setServiceDeleteModal('assignment');
    } else if (select === 'owner') {
      setServiceOwnerModal('assignment');
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
              <S.TR>
                <th>이름</th>
                <th>학년</th>
                <th>반</th>
                <th>번호</th>
              </S.TR>
            </thead>
            <tbody>
              {stuList
                .filter((e) => e.name?.includes(search))
                .filter((e) => workers.some((person) => e.id === person.userId))
                .map((e) => (
                  <S.TR key={e.id}>
                    <td>{e.name}</td>
                    <td>{e.grade}</td>
                    <td>{e.classNum}</td>
                    <td>{e.num}</td>
                    <td>
                      <select
                        id="role"
                        onChange={(event) => {
                          roleSwitcher(event, e.id);
                        }}
                        value={'coworker'}
                      >
                        <option value="owner">소유자</option>
                        <option value="coworker">공동작업자</option>
                        <option value="delete">삭제</option>
                      </select>
                    </td>
                  </S.TR>
                ))}
            </tbody>
          </S.Table>
        </S.TableWrapper>
      </S.Container>
    </Portal>
  );
}
