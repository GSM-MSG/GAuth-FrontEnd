import { ErrorIcon } from '../../../../public/svg';
import Portal from '../../common/Portal';
import * as S from './style';

interface Props {
  onClose: () => void;
}

export default function Assignment({ onClose }: Props) {
  return (
    <Portal onClose={onClose}>
      <S.Wrapper>
        <h1>소유자 권한 양도</h1>
        <div>
          <S.Title>
            <ErrorIcon />
            <div>
              <h4>정말 소유자 권한을 양도하실 건가요?</h4>
              <p>소유자 권한을 양도하면 모든 권한을 양도하게 됩니다.</p>
            </div>
          </S.Title>
          <S.ButtonWrapper>
            <S.Button modeType>양도</S.Button>
            <S.Button modeType={false} onClick={onClose}>
              취소
            </S.Button>
          </S.ButtonWrapper>
        </div>
      </S.Wrapper>
    </Portal>
  );
}
