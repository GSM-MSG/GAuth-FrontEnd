import { toast } from 'react-toastify';
import * as SVG from '../../../public/svg';
import { ResAddService } from '../../types/ResAddService';
import * as S from './style';

export default function ServiceInfo({
  serviceData,
  onClose,
}: {
  serviceData: ResAddService;
  onClose: () => void;
}) {
  const CopyText = (data: string) => {
    navigator.clipboard.writeText(data);
    toast.info('클립보드에 복사되었습니다.');
  };

  return (
    <S.ModalPosition>
      <S.ModalLayer>
        <S.ModelBox>
          <div>
            <SVG.CheckIcon />
            <h1>서비스 등록 완료!</h1>
          </div>
          <div>
            <h3>서비스명 : {serviceData.serviceName}</h3>
            <h3>서비스 URL : {serviceData.serviceUri}</h3>
            <h3>Redirect URL : {serviceData.redirectUri}</h3>
            <h3>
              클라이언트 ID : {serviceData.clientId}
              <span onClick={() => CopyText(serviceData.clientId ?? '')}>
                <SVG.CopyIcon />
              </span>
            </h3>
            <h3>
              클라이언트 secret : {serviceData.clientSecret}
              <span onClick={() => CopyText(serviceData.clientSecret ?? '')}>
                <SVG.CopyIcon />
              </span>
            </h3>
          </div>
          <button onClick={() => onClose()}>확인</button>
        </S.ModelBox>
      </S.ModalLayer>
    </S.ModalPosition>
  );
}
