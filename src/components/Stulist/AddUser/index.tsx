import { useRecoilValue } from 'recoil';
import { ModalPage } from '../../../Atom/Atoms';
import Portal from '../../common/Portal';
import InsertStuInfo from './Page/InsertStuInfo';
import InsertTeacherInfo from './Page/InsertTeacherInfo';
import SelectGrade from './Page/SelectGrade';
import * as S from './style';

interface Props {
  onClose: () => void;
}

export default function AddUser({ onClose }: Props) {
  const modalPage = useRecoilValue(ModalPage);

  return (
    <Portal onClose={onClose}>
      <S.Wrapper>
        {modalPage === 0 && <SelectGrade />}
        {modalPage === 1 && <InsertStuInfo onClose={onClose} />}
        {modalPage === 2 && <InsertTeacherInfo onClose={onClose} />}
      </S.Wrapper>
    </Portal>
  );
}
