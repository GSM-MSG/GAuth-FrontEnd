import Image from 'next/image';
import { toast } from 'react-toastify';
import * as SVG from '../../../public/svg';
import useFetch from '../../hooks/useFetch';
import { useUser } from '../../hooks/useUser';
import * as S from './style';
import { useRecoilValue } from 'recoil';
import { Role } from '../../Atom/Atoms';

export default function Profile() {
  const [user, getUser] = useUser();
  const userRole = useRecoilValue(Role);

  const { fetch } = useFetch({
    url: '/user/image',
    method: 'patch',
    onSuccess: () => {
      getUser();
    },
    onFailure: () => {
      toast.error('이미지 업로드를 실패하였습니다.');
    },
  });

  const updateMyProfileImg = async (files: FileList) => {
    const formData = new FormData();
    if (files) formData.append('image', files[0]);
    fetch(formData);
  };

  const handleFiles = (files: FileList) => {
    if (!files[0] || !files[0].type.startsWith('image/')) return;
    updateMyProfileImg(files);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) handleFiles(event.target.files);
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

  return (
    <S.ProfileWrapper>
      <S.ProfileSection>
        <label
          htmlFor="profile"
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
        >
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
            <SVG.ProfileSmallFace />
          )}
          <i>
            <SVG.ModifyProfile />
          </i>
        </label>
        <input
          type="file"
          accept="image/*"
          id="profile"
          style={{ display: 'none' }}
          onChange={changeHandler}
        />
      </S.ProfileSection>
      <S.PrivacySection>
        <h1>{user.name}</h1>
        <p>
          {userRole[0] === 'ROLE_TEACHER'
            ? '선생님'
            : !user.grade && !user.classNum && !user.number
            ? '졸업생'
            : `${user.grade}학년 ${user.classNum}반 ${user.number}번`}
        </p>
        <h3>{user.email}</h3>
      </S.PrivacySection>
    </S.ProfileWrapper>
  );
}
