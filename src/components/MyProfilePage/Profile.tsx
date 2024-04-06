import Image from 'next/image';
import { toast } from 'react-toastify';
import * as SVG from '../../../public/svg';
import useFetch from '../../hooks/useFetch';
import { useUser } from '../../hooks/useUser';
import * as S from './style';
import { useEffect, useState } from 'react';

export default function Profile() {
  const [user, getUser] = useUser();
  const [profileImgUrl, setProfileImgUrl] = useState('');
  const [modifyState, setModifyState] = useState(true);
  const { fetch } = useFetch({
    url: `/user/profile?image_url=${profileImgUrl}`,
    method: 'patch',
    onSuccess: () => {
      getUser();
    },
    onFailure: () => {
      toast.error('이미지 업로드를 실패하였습니다.');
    },
  });

  const { fetch: uploadImage } = useFetch<{ imageURL: string }>({
    url: '/image',
    method: 'post',
    onSuccess: (data) => {
      if (data) {
        setProfileImgUrl(data.imageURL);
      } else {
        toast.error('이미지 업로드를 실패하였습니다.');
      }
    },
    onFailure: () => {
      toast.error('이미지 업로드를 실패하였습니다.');
    },
  });

  useEffect(() => {
    const fn = async () => {
      await fetch();
    };
    fn();
  }, [profileImgUrl]);

  const handleFileUpload = async (file: File) => {
    if (file === undefined || !file.type.startsWith('image/')) return;

    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    const fileExtension = file.name.split('.').pop();

    if (allowedExtensions.exec('.' + fileExtension)) {
      const formData = new FormData();
      formData.append('image', file);
      uploadImage(formData);
    }
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) handleFileUpload(event.target.files[0]);
  };

  const dropHandler = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
    handleFileUpload(event.dataTransfer.files[0]);
  };

  const dragOverHandler = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <S.ProfileWrapper>
      <S.ProfileSection>
        <div onMouseOver={() => setModifyState(!modifyState)}>
          {user.profileUrl ? (
            <S.Profile>
              <Image
                alt="NoImage"
                priority={true}
                src={user.profileUrl}
                layout="fill"
                sizes="100%"
              />
            </S.Profile>
          ) : (
            <S.Profile>
              <SVG.ProfileSmallFace />
            </S.Profile>
          )}
        </div>
        <S.Circle
          style={{ display: modifyState ? 'none' : 'inline' }}
          onMouseOut={() => setModifyState(!modifyState)}
        >
          <div
            onClick={() => {
              setProfileImgUrl('');
            }}
          >
            사진 삭제
          </div>
          <label
            htmlFor="profile"
            onDrop={dropHandler}
            onDragOver={dragOverHandler}
          >
            사진 변경
          </label>
        </S.Circle>
        <input
          type="file"
          name="image"
          id="profile"
          style={{ display: 'none' }}
          onChange={changeHandler}
        />
      </S.ProfileSection>

      <S.PrivacySection>
        <h1>{user.name}</h1>
        <p>
          {!user.grade && !user.classNum && !user.number
            ? '졸업생'
            : `${user.grade}학년 ${user.classNum}반 ${user.number}번`}
        </p>
        <h3>{user.email}</h3>
      </S.PrivacySection>
    </S.ProfileWrapper>
  );
}
