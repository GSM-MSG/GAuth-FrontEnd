import { useRouter } from 'next/router';
import { ErrorIcon } from '../../../../../public/svg';
import useFetch from '../../../../hooks/useFetch';
import Portal from '../../../common/Portal';
import * as S from './style';

interface Props {
  onClose: () => void;
  modifyId: string;
  userId: number;
}

export default function Assignment({ onClose, modifyId, userId }: Props) {
  const router = useRouter();

  const { fetch } = useFetch({
    url: `client/${modifyId}/co-worker`,
    method: 'delete',
    onSuccess: () => {
      onClose();
      router.push(`/${modifyId}`)
    },
  });

  return (
    <Portal onClose={onClose}>
      <S.Wrapper>
        <h1>공동작업자 삭제</h1>
        <div>
          <S.Title>
            <ErrorIcon />
            <div>
              <h4>정말 삭제하실 건가요?</h4>
              <p>공동작업자 리스트에서 삭제됩니다.</p>
            </div>
          </S.Title>
          <S.ButtonWrapper>
            <S.Button modeType onClick={() => fetch({userId: userId})}>
              삭제
            </S.Button>
            <S.Button modeType={false} onClick={onClose}>
              취소
            </S.Button>
          </S.ButtonWrapper>
        </div>
      </S.Wrapper>
    </Portal>
  );
}
