import CreateTitle from '../common/CreateTitle';
import * as S from './style';
import * as SVG from '../../../public/svg';
import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  EmailInfo,
  ModalPage,
  Name,
  NumberInfo,
  PrivacyInfo,
} from '../../Atom/Atoms';
import { useRouter } from 'next/router';
import { SubmitWrapper } from '../common/Auth/style';
import useFetch from '../../hooks/useFetch';

export default function Profile() {
  const router = useRouter();
  const setModalPage = useSetRecoilState(ModalPage);
  const [emailInfo, setEmailInfo] = useRecoilState(EmailInfo);
  const setPrivacy = useSetRecoilState(PrivacyInfo);
  const [img, setImg] = useState('');
  const [name, setName] = useRecoilState(Name);
  const [numberInfo, setNumberInfo] = useRecoilState(NumberInfo);

  const { fetch: getImage } = useFetch<{ imageUrl: string }>({
    url: 'auth/image',
    method: 'patch',
    onSuccess: (data) => setImg(data.imageUrl),
  });

  const { fetch: signUp } = useFetch({
    url: '/auth/v2/signup',
    method: 'post',
    onSuccess: () => {
      resetModalType('/signUp');
      setModalPage(7);
    },
    onFailure: () => {
      resetModalType('/login');
    },
    errorMessage: {
      409: '이미 가입한 계정입니다.',
      400: '이메일,비밀번호가 바르지 않습니다',
    },
  });

  const GetImgURL = async (files: FileList) => {
    const formData = new FormData();
    if (files) formData.append('image', files[0]);
    formData.append('email', emailInfo.email + '@gsm.hs.kr');
    getImage(formData);
  };

  const resetModalType = (type: string) => {
    setModalPage(0);
    router.push(type);
    setEmailInfo({
      email: '',
      password: '',
    });
    setName('');
    setNumberInfo({
      classNum: 0,
      grade: 0,
      number: 0,
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

  const onSubmit = async () =>
    signUp({
      email: emailInfo.email + '@gsm.hs.kr',
      password: emailInfo.password,
      profileUrl: img ?? null,
      grade: numberInfo.grade,
      classNum: numberInfo.classNum,
      num: numberInfo.number,
      name: name,
    });

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
