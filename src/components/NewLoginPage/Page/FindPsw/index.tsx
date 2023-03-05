import { useRecoilValue } from 'recoil';
import { ModalPage } from '../../../../Atom/Atoms';
import CreateTitle from '../../../common/CreateTitle';
import NewPassword from './NewPassword';
import SearchEmail from './SearchEmail';
import VerifyEmail from './VerifyEmail';

export default function FindPsw() {
  const modalPage = useRecoilValue(ModalPage);

  return (
    <>
      <CreateTitle
        title={'비밀번호'}
        logo={true}
        subTitle={
          modalPage === 0
            ? '가입하신 이메일을 입력해주세요.'
            : modalPage === 1
            ? ''
            : '새로 사용하실 비밀번호를 입력해주세요.'
        }
      />
      {modalPage === 0 && <SearchEmail />}
      {modalPage === 1 && <VerifyEmail />}
      {modalPage === 2 && <NewPassword />}
    </>
  );
}
