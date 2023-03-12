import * as S from './style';
import * as SVG from '../../../../public/svg';
import { useUser } from '../../../hooks/useUser';
import API from '../../../api';
import { useRecoilState } from 'recoil';
import { FixService } from '../../../Atom/Atoms';
import { toast } from 'react-toastify';
import { isAxiosError } from 'axios';

export default function DeleteService() {
  const [user, getUser] = useUser(false);
  const [fix, setFix] = useRecoilState(FixService);

  const DeleteService = async () => {
    try {
      await API.delete(`/client/${fix.id}`);
      toast.success('삭제 되었습니다.');
      getUser();
    } catch (e) {
      if (!isAxiosError(e))
        return toast.error('예상치 못한 오류가 발생하였습니다.');
      if (e.response?.status === 404)
        return toast.error('해당 서비스를 찾을수 없습니다.');
      if (e.response?.status === 403)
        return toast.error('해당 서비스는 삭제 할 수 업습니다.');
    } finally {
      setFix({
        id: undefined,
        type: '',
        toggle: false,
      });
    }
  };

  return (
    <S.Wrapper>
      <h1>서비스 삭제</h1>
      <div>
        <S.Title>
          <SVG.ErrorIcon />
          <h4>정말 삭제하실건가요?</h4>
          <p>삭제하시면 다시 복구할 수 없어요.</p>
        </S.Title>
        <S.ButtonWrapper>
          <S.Button modeType={true} onClick={DeleteService}>
            삭제
          </S.Button>
          <S.Button
            modeType={false}
            onClick={() =>
              setFix((prev) => {
                return {
                  ...prev,
                  type: '',
                };
              })
            }
          >
            취소
          </S.Button>
        </S.ButtonWrapper>
      </div>
    </S.Wrapper>
  );
}
