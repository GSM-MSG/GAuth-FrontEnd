import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { ModalPage, PrivacyInfo } from '../../Atom/Atoms';
import { SubmitWrapper } from '../common/Auth/style';
import CreateTitle from '../common/CreateTitle';
import * as S from './style';

export default function Privacy() {
  const router = useRouter();
  const setModalPage = useSetRecoilState(ModalPage);
  const [privacy, setPrivacy] = useRecoilState(PrivacyInfo);

  const changeModalType = (type: string) => {
    setModalPage(0);
    router.push(type);
  };

  const checkPrivacy = () => {
    if (!privacy)
      return toast.error('개인정보 수집 및 이용에 대해 동의해 주십시오.');
    setModalPage(3);
  };

  return (
    <>
      <CreateTitle
        title={'회원가입'}
        logo={true}
        subTitle={'이미 gauth를 사용중이신가요?'}
        option={'로그인'}
        onClick={() => changeModalType('/login')}
      />
      <S.PrivacyConsent>
        <span>
          <label htmlFor="privacy">
            <input
              id="privacy"
              type="checkbox"
              checked={privacy}
              onChange={() => {
                setPrivacy((prev) => !prev);
              }}
            />
            <p>개인정보 이용 동의(필수) </p>
          </label>
          <a onClick={() => setModalPage(-1)}>자세히 {'>'}</a>
        </span>
      </S.PrivacyConsent>
      <SubmitWrapper>
        <button onClick={() => checkPrivacy()}>다음</button>
      </SubmitWrapper>
    </>
  );
}
