import { useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import CreateTitle from '../../common/CreateTitle';
import DragAndDrop from '../../common/DragAndDrop';
import Portal from '../../common/Portal';
import { SubmitWrapper } from '../../SignIn/style';
import * as S from './style';
import * as SVG from '../../../../public/svg';
import { toast } from 'react-toastify';

interface Props {
  onClose: () => void;
}

export default function SaveXlsx({ onClose }: Props) {
  const [file, setFile] = useState<FileList | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const { fetch, isLoading } = useFetch({
    url: '/admin/parsing-member',
    method: 'post',
    successMessage: '파일 업로드 성공',
    errorMessage: '파일 업로드 실패',
    onFinaly: () => {
      setFile(null);
      onClose();
    },
  });

  const setFileHandle = (e: FileList) => {
    if (e && e[0].name.split('.')[1] !== 'xlsx')
      return toast.error('파일 형식이 맞지 않습니다.');
    setFile(e);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFileHandle(e.target.files);
    }
  };

  const onSubmit = async () => {
    if (!file || isLoading) return;

    const formData = new FormData();
    formData.append('studentInfo', file[0]);
    fetch(formData);
  };

  return (
    <Portal onClose={onClose}>
      <S.Wrapper>
        <CreateTitle
          title={'사용자 등록'}
          logo={true}
          subTitle={'승인하실 학생들에 정보가 담긴 엑셀을 올려주세요.'}
        />
        <S.Form>
          <DragAndDrop
            dropHandle={setFileHandle}
            draggingHandle={setIsDragging}
          >
            <S.XlsxBox htmlFor="xlsx" dragging={isDragging}>
              {file && file[0] ? (
                <S.UploadFile>
                  <SVG.Intruction />
                  <p>{file[0].name}</p>
                </S.UploadFile>
              ) : (
                <S.AddFile>
                  <SVG.FileIcon />
                  <p>
                    엑셀 파일 업로드
                    <br />
                    <span>드래그 엔 드롭</span>
                  </p>
                </S.AddFile>
              )}
            </S.XlsxBox>
          </DragAndDrop>
          <input type="file" accept=".xlsx" id="xlxs" onChange={onChange} />
          <SubmitWrapper>
            <button type="button" onClick={() => onSubmit()}>
              완료
            </button>
          </SubmitWrapper>
        </S.Form>
      </S.Wrapper>
    </Portal>
  );
}
