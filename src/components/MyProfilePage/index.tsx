import { useState } from 'react';
import * as S from './style';
import * as SVG from '../../../public/svg';
import * as Util from '../../util';

export default function MyProfilePage() {
  const [img, setImg] = useState('');
  const [profileImg, setProfileImg] = useState<FileList>();

  const handleFiles = (files: FileList) => {
    if (!files[0].type.startsWith('image/')) return
    setProfileImg(files);
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      const { result } = reader;
      setImg(new Util.ImgUpload(result!).checkImgType());
    };
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
                {img ? <S.Profile src={img} /> : <SVG.ProfileSmallFace />}
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
                <h1>홍길동</h1>
                <p>1학년 2반 18번</p>
              </div>
              <h3>s21073@gsm.hs.kr</h3>
            </S.PrivacySection>
          </S.UpLoadProfileContainter>
        </S.ProfileSection>
      </S.Layer>
    </S.Positioner>
  );
}
