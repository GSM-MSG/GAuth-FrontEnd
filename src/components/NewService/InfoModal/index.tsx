import * as SVG from '../../../../public/svg';
import { ResNewService } from '../../../types/ResAddService';
import Portal from '../../common/Portal';
import Info from './Info';
import * as S from './style';

export default function ServiceInfoModal({
  serviceData,
  onClose,
}: {
  serviceData: ResNewService;
  onClose: () => void;
}) {
  const { clientId, clientSecret, redirectUri, serviceName, serviceUri } =
    serviceData;

  return (
    <Portal onClose={onClose}>
      <S.Wrapper>
        <h1>
          <SVG.CheckIcon />
          서비스 등록 완료!
        </h1>
        <S.ModalSection>
          <div>
            <Info title="서비스명 :" value={serviceName} />
            <Info title="서비스 URL :" value={serviceUri} />
            <Info title="리다이렉트 URL :" value={redirectUri} />
            <Info title="클라이언트 ID :" value={clientId} copy={true} />
            <Info
              title="클라이언트 Secret :"
              value={clientSecret}
              copy={true}
            />
          </div>
          <button onClick={onClose}>확인</button>
        </S.ModalSection>
      </S.Wrapper>
    </Portal>
  );
}
