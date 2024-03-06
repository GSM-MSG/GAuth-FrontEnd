import { useSetRecoilState } from 'recoil';
import XIcon from '../../../public/svg/XIcon';
import { ServiceOwnerModal } from '../../Atom/Atoms';
import Portal from '../common/Portal';
import SearchBar from '../common/SearchBar';
import * as S from './style';

interface Props {
  onClose: () => void;
}

export default function ServiceOwnerList({ onClose }: Props) {
  const setServiceOwnerModal = useSetRecoilState(ServiceOwnerModal);

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
              {Array.from({ length: 20 }).map((idx: any) => (
                <tr key={idx}>
                  <td>서주미</td>
                  <td>3</td>
                  <td>2</td>
                  <td>6</td>
                  <td>
                    <button
                      onClick={() => {
                        setServiceOwnerModal('assignment');
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
