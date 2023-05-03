import { useRecoilValue } from 'recoil';
import Portal from '../../common/Portal';
import InsertStuInfo from './Page/InsertStuInfo';
import InsertTeacherInfo from './Page/InsertTeacherInfo';
import InsertGraduInfo from './Page/InsertGraduInfo';
import SelectGrade from './Page/SelectGrade';
import * as S from './style';
import { ApproveId, ModalType } from '../../../Atom/Atoms';
import { ROLE_GRADUATE, ROLE_STUDENT, ROLE_TEACHER } from '../../../lib/UserRole';
import useFetch from '../../../hooks/useFetch';
import { AcceptUserType } from '../../../types/AcceptUserType';
import { useUserList } from '../../../hooks/useUserList';

interface Props {
  onClose: () => void;
}

export default function AddUser({ onClose }: Props) {
  const modalType = useRecoilValue(ModalType);
  const approveId = useRecoilValue(ApproveId);

  const { getUserList } = useUserList({
    defaultUri: '/user/pending',
    getAuto: false,
  });

  const { fetch } = useFetch({
    url: `user/accept-user/${approveId}`,
    method: 'PATCH',
    onSuccess: () => {
      getUserList();
    },
    successMessage: '추가 완료',
    errorMessage: '실패',
  });

  const acceptUserHandle = (body: AcceptUserType) => {
    fetch({ userRole: modalType, ...body });
  };

  return (
    <Portal onClose={onClose}>
      <S.Wrapper>
        {modalType === '' && <SelectGrade />}
        {modalType === ROLE_STUDENT && (
          <InsertStuInfo onClose={onClose} onAccept={acceptUserHandle} />
        )}
        {modalType === ROLE_TEACHER && (
          <InsertTeacherInfo onClose={onClose} onAccept={acceptUserHandle} />
        )}
        {modalType === ROLE_GRADUATE && (
          <InsertGraduInfo onClose={onClose} onAccept={acceptUserHandle} />
        )}
      </S.Wrapper>
    </Portal>
  );
}
