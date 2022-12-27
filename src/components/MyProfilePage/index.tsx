import * as S from './style';
import * as SVG from '../../../public/svg';
import { API } from '../../lib/API';
import { accessToken } from '../../lib/Token';
import { useUser } from '../../hooks/useUser';

export default function MyProfilePage() {
  const [user, getUser] = useUser();

  const updateMyProfileImg = async (files: FileList) => {
    try {
      const formData = new FormData();
      if (files) formData.append('image', files[0]);
      const { request } = await API.patch('/user/image', formData, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem(accessToken),
        },
      });
      if (request.status == 204) getUser();
    } catch (e) {
      console.log(e);
    }
  };

  const handleFiles = (files: FileList) => {
    if (!files[0] || !files[0].type.startsWith('image/')) return;
    updateMyProfileImg(files);
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
  return (
    <S.Positioner>
      <S.Layer>
        <S.TitleSection>
          <h1>마이페이지&등록한 서비스 관리</h1>
          <h3>여기에서 등록해주신 서비스를 쉽게 관리하실 수 있어요!</h3>
        </S.TitleSection>
        <S.ProfileSection>
          <S.UpLoadProfileContainter>
            <S.ProfileSVGWrapper>
              <label
                htmlFor="profile"
                onDrop={dropHandler}
                onDragOver={dragOverHandler}
              >
                {user.profileUrl ? (
                  <S.Profile src={user.profileUrl} />
                ) : (
                  <SVG.ProfileSmallFace />
                )}
                <i>
                  <SVG.ModifyProfile />
                </i>
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
            <S.PrivacySection>
              <div>
                <h1>{user.name}</h1>
                <p>
                  {user.grade +
                    '학년 ' +
                    user.classNum +
                    '반 ' +
                    user.number +
                    '번'}
                </p>
              </div>
              <h3>{user.email}</h3>
            </S.PrivacySection>
          </S.UpLoadProfileContainter>
        </S.ProfileSection>
      </S.Layer>
    </S.Positioner>
  );
}
