import { useSetRecoilState } from 'recoil';
import { ModalPage } from '../../Atom/Atoms';
import NewPasswordCommon from '../common/Auth/NewPasswordCommon';

export default function NewPassword() {
  const setModalPage = useSetRecoilState(ModalPage);

  const onSubmit = () => {
    setModalPage((prev) => ++prev);
  };
  return (
    <NewPasswordCommon
      title="회원가입"
      submitBtn="다음"
      onSubmit={() => onSubmit()}
    />
  );
}
