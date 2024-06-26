import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { ErrorIcon } from '../../../../public/svg';
import { ServiceOwnerUserId } from '../../../Atom/Atoms';
import useFetch from '../../../hooks/useFetch';
import Portal from '../../common/Portal';
import * as S from './style';

interface Props {
  onClose: () => void;
  modifyId: string;
}

export default function Assignment({ onClose, modifyId }: Props) {
  const [serviceOwnerUserId, setServiceOwnerUserId] =
    useRecoilState(ServiceOwnerUserId);
  const router = useRouter();

  const { fetch } = useFetch({
    url: `client/${modifyId}/co-worker`,
    method: 'patch',
    onSuccess: () => {
      setServiceOwnerUserId(0);
      onClose();
      router.push('/myprofile');
    },
  });

  return (
    <Portal onClose={onClose}>
      <S.Wrapper>
        <h1>공동작업자 추가</h1>
        <div>
          <S.Title>
            <ErrorIcon />
            <div>
              <h4>정말 공동작업자로 추가하실 건가요?</h4>
              <p>소유자 권한을 양도하면 모든 권한을 양도하게 됩니다.</p>
            </div>
          </S.Title>
          <S.ButtonWrapper>
            <S.Button modeType onClick={() => fetch({ userId: serviceOwnerUserId })}>
              양도
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
