import { useRecoilValue } from 'recoil';
import { EmailInfo } from '../../Atom/Atoms';
import useFetch from '../../hooks/useFetch';
import { useResetModal } from '../../hooks/useResetModal';
import NewPasswordCommon from '../common/Auth/NewPasswordCommon';

export default function NewPassword() {
  const emailInfo = useRecoilValue(EmailInfo);
  const { changeModalType } = useResetModal();

  const { fetch } = useFetch({
    url: '/auth/password/initialize',
    method: 'patch',
    onSuccess: () => {
      changeModalType('/login');
    },
    onFailure: () => {
      changeModalType('/login');
    },
    errorMessage: {
      401: '이메일 인증 기한이 만료 되었습니다.',
    },
  });

  const onSubmit = async (data: { password: string; rePassword: string }) =>
    fetch({
      email: emailInfo.email + '@gsm.hs.kr',
      newPassword: data.rePassword,
    });

  return (
    <NewPasswordCommon
      title="비밀번호"
      submitBtn="완료"
      bottomPhrase="로그인 하러가기"
      changeModal="/login"
      onSubmit={onSubmit}
    />
  );
}
