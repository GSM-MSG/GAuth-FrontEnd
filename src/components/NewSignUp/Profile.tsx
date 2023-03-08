import CreateTitle from '../common/CreateTitle';
import * as S from './style';
import * as SVG from '../../../public/svg';
import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { EmailInfo, ModalPage, PrivacyInfo } from '../../Atom/Atoms';
import API from '../../api';
import { isAxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { SubmitWrapper } from '../common/Auth/style';

export default function Profile() {
  const router = useRouter();
  const setModalPage = useSetRecoilState(ModalPage);
  const [emailInfo, setEmailInfo] = useRecoilState(EmailInfo);
  const setPrivacy = useSetRecoilState(PrivacyInfo);
  const [img, setImg] = useState('');

  const GetImgURL = async (files: FileList) => {
    try {
      const formData = new FormData();
      if (files) formData.append('image', files[0]);
      formData.append('email', emailInfo.email + '@gsm.hs.kr');
      const { data } = await API.patch('/auth/image', formData);
      setImg(data.imageUrl);
    } catch (e) {
      if (!isAxiosError(e)) toast.error('예상치 못한 오류가 발생하였습니다.');
      resetModalType('/login');
    }
  };

  const resetModalType = (type: string) => {
    setModalPage(0);
    router.push(type);
    setEmailInfo({
      email: '',
      password: '',
    });
    setPrivacy(false);
  };

  const handleFiles = (files: FileList) => {
    if (!files[0] || !files[0].type.startsWith('image/')) return;
    GetImgURL(files);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(event.target.files!);
  };

  const dropHandler = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
    handleFiles(event.dataTransfer.files);
  };

  const dragOverHandler = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const onSubmit = async () => {
    try {
      await API.post('/auth/signup', {
        email: emailInfo.email + '@gsm.hs.kr',
        password: emailInfo.password,
        profileUrl: img ?? null,
      });
      resetModalType('/signUp');
      setModalPage(5);
    } catch (e) {
      if (!isAxiosError(e)) return toast.error('unkonwn error');
      if (e.response?.status === 409) toast.error('이미 가입한 계정입니다.');
      if (e.response?.status === 400)
        toast.error('이메일,비밀번호가 바르지 않습니다.');
      resetModalType('/login');
    }
  };

  return (
    <>
      <CreateTitle title={'회원가입'} logo={true} />
      <S.ProfileTitle>
        <strong>이제 마지막이에요</strong>, 사용하실 <br />
        프로필 이미지를 설정해주세요.
      </S.ProfileTitle>
      <S.ProfileSVGWrapper>
        <label
          htmlFor="profile"
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
        >
          {img ? <S.Profile src={img} /> : <SVG.ImageUpload />}
        </label>
        <input
          type="file"
          multiple
          accept="image/*"
          id="profile"
          style={{ display: 'none' }}
          onChange={changeHandler}
        />
      </S.ProfileSVGWrapper>
      <SubmitWrapper>
        <button onClick={onSubmit}>완료</button>
      </SubmitWrapper>
    </>
  );
}
