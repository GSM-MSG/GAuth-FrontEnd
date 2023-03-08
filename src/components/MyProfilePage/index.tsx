import * as S from './style';
import * as SVG from '../../../public/svg';
import { useUser } from '../../hooks/useUser';
import { toast } from 'react-toastify';
import MyServiceList from '../MyServiceList';
import { useSetRecoilState } from 'recoil';
import { UserLists } from '../../Atom/Atoms';
import { useEffect } from 'react';
import API from '../../api';
import Image from 'next/image';

export default function MyProfilePage() {
  const [user, getUser] = useUser();
  const setUserLists = useSetRecoilState(UserLists);
  useEffect(() => {
    setUserLists(user.clientList);
  }, [user, setUserLists]);

  const updateMyProfileImg = async (files: FileList) => {
    try {
      const formData = new FormData();
      if (files) formData.append('image', files[0]);
      const { request } = await API.patch('/user/image', formData);
      if (request.status != 204)
        return toast.error('이미지 업로드를 실패하였습니다.');
      getUser();
    } catch (e) {
      toast.error('이미지 업로드를 실패하였습니다.');
    }
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
    <S.Layout>
      <S.Wrapper>
        <S.TitleSection>
          <h1>마이페이지&등록한 서비스 관리</h1>
          <h3>여기에서 등록해주신 서비스를 쉽게 관리하실 수 있어요!</h3>
        </S.TitleSection>
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
                    fill
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
              {user.grade +
                '학년 ' +
                user.classNum +
                '반 ' +
                user.number +
                '번'}
            </p>
            <h3>{user.email}</h3>
          </S.PrivacySection>
        </S.ProfileWrapper>
        <S.Hr />
        <MyServiceList />
      </S.Wrapper>
    </S.Layout>
  );
}
