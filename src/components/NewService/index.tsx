import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AddServiceForm } from '../../../public/svg';
import { API } from '../../lib/API';
import { accessToken } from '../../lib/Token';
import { ResAddService } from '../../types/ResAddService';
import ServiceInfo from './ServiceInfo';
import * as S from './style';

export default function AddServicePage() {
  const serviceDefaultData = {
    clientId: '',
    clientSecret: '',
    redirectUri: '',
    serviceName: '',
    serviceUri: '',
  };
  const [modal, setModal] = useState<boolean>(false);
  const [serviceData, setServiceData] = useState<ResAddService>({
    clientId: '',
    clientSecret: '',
    redirectUri: '',
    serviceName: '',
    serviceUri: '',
  });
  const { register, handleSubmit, reset } = useForm({
    mode: 'all',
    defaultValues: serviceDefaultData,
  });
  const regUrl =
    /^(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}([\/a-z0-9-%#?&=\w])+(\.[a-z0-9]{2,4}(\?[\/a-z0-9-%#?&=\w]+)*)*/gi;

  const onSubmit = async (inputs: ResAddService) => {
    try {
      API.defaults.headers.common['Authorization'] =
        'Bearer ' + localStorage.getItem(accessToken);
      const { data } = await API.post('/client', {
        serviceName: inputs.serviceName,
        serviceUri: inputs.serviceUri,
        redirectUri: inputs.redirectUri,
      });
      setServiceData(data);
      setModal(true);
    } catch (e) {}
  };

  const onError = (err: Object) => {
    Object.values(err).map((item, idx) => {
      if (idx === 0) return toast.warn(item.message);
    });
  };

  return (
    <S.Positioner>
      <S.Layer>
        <S.Form onSubmit={handleSubmit(onSubmit, onError)}>
          <S.FormTitle>
            <h1>서비스를 등록해볼까요?</h1>
            <h3>서비스 등록도, 학생정보 수집도 쉽게!</h3>
          </S.FormTitle>
          <S.InputContainer>
            <input
              placeholder="서비스명을 입력해주세요"
              {...register('serviceName', {
                required: '서비스명을 입력하지 않았습니다.',
                pattern: {
                  value: /\S+/,
                  message: '서비스명을 입력하지 않았습니다.',
                },
                maxLength: {
                  value: 16,
                  message: '최대 20자까지 입력할 수 있습니다',
                },
              })}
            />
            <input
              placeholder="리다이렉트 URL을 입력해주세요"
              {...register('redirectUri', {
                required: '리다이렉트 URI를 입력하지 않았습니다.',
                pattern: {
                  value: regUrl,
                  message: '리다이렉트 URL를 형식에 맞게 입력해주세요',
                },
                maxLength: {
                  value: 16,
                  message: '최대 254자까지 입력할 수 있습니다',
                },
              })}
            />
            <input
              placeholder="사이트 URL을 입력해주세요"
              {...register('serviceUri', {
                required: '사이트 URI를 입력하지 않았습니다.',
                pattern: {
                  value: regUrl,
                  message: '사이트 URI를 형식에 맞게 입력해주세요',
                },
              })}
            />
          </S.InputContainer>
          <S.Submit type="submit">등록</S.Submit>
        </S.Form>
        <S.ImgBox>
          <AddServiceForm />
        </S.ImgBox>
        {modal && (
          <ServiceInfo
            serviceData={serviceData}
            onClose={() => {
              setModal(false);
              reset(serviceDefaultData);
            }}
          />
        )}
      </S.Layer>
    </S.Positioner>
  );
}
