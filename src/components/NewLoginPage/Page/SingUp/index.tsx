import { useSetRecoilState } from 'recoil';
import { ModalType } from '../../../../Atom/Atoms';
import CreateTitle from '../../../common/CreateTitle';
import { SubmitWrapper } from '../../style';

export default function SignUp() {
  const setModalType = useSetRecoilState(ModalType);

  return (
    <>
      <CreateTitle
        title={'회원가입'}
        logo={true}
        subTitle={'이미 gauth를 사용중이신가요?'}
        option={'로그인'}
        onClick={() => setModalType('signIn')}
      />
      <SubmitWrapper>
        <button>회원가입</button>
      </SubmitWrapper>
    </>
  );
}
