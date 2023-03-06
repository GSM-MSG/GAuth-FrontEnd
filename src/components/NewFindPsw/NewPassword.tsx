import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import API from '../../api';
import { EmailInfo, ModalPage } from '../../Atom/Atoms';
import NewPasswordCommon from '../common/Auth/NewPasswordCommon';

export default function NewPassword() {
  const router = useRouter();
  const setModalPage = useSetRecoilState(ModalPage);
  const emailInfo = useRecoilValue(EmailInfo);
  const onSubmit = async (data: { password: string; rePassword: string }) => {
    try {
      await API.patch('/auth/password/initialize', {
        email: emailInfo.email + '@gsm.hs.kr',
        newPassword: data.rePassword,
      });
      setModalPage(0);
      router.push('/login');
    } catch (e) {
      if (!axios.isAxiosError(e)) return toast.error('unkonwn error');
    }
  };

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
