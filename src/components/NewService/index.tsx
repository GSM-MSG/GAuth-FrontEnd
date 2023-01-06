import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AddServiceFormImg } from '../../../public/svg';
import { API } from '../../lib/API';
import { accessToken } from '../../lib/Token';
import { NewServiceForm, ResNewService } from '../../types/ResAddService';
import ServiceInfoModal from './ServiceInfoModal';
import * as S from './style';

export default function NewServicePage() {
  const serviceDefaultData: ResNewService = {
    clientId: '',
    clientSecret: '',
    redirectUri: '',
    serviceName: '',
    serviceUri: '',
  };
  const [modal, setModal] = useState<boolean>(false);
  const [serviceData, setServiceData] =
    useState<ResNewService>(serviceDefaultData);
  const { register, handleSubmit, reset } = useForm<NewServiceForm>({
    mode: 'all',
    defaultValues: serviceData,
  });
  const regUrl =
    /^(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}([\/a-z0-9-%#?&=\w])+(\.[a-z0-9]{2,4}(\?[\/a-z0-9-%#?&=\w]+)*)*/gi;

  const onSubmit = async (inputs: NewServiceForm) => {
    try {
      API.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${localStorage.getItem(accessToken)}`;
      const { data } = await API.post('/client', {
        serviceName: inputs.serviceName,
        serviceUri: inputs.serviceUri,
        redirectUri: inputs.redirectUri,
      });
      setServiceData(data);
      setModal(true);
    } catch (e) {
      toast.error('예기치 못한 오류가 발생했습니다.');
    }
  };

  const onError = (err: Object) => {
    return toast.warn(Object.values(err)[0].message);
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
                  value: 20,
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
                  value: 254,
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
                maxLength: {
                  value: 254,
                  message: '최대 254자까지 입력할 수 있습니다',
                },
              })}
            />
          </S.InputContainer>
          <S.Submit type="submit">등록</S.Submit>
        </S.Form>
        <S.ImgBox>
          <AddServiceFormImg />
        </S.ImgBox>
        {modal && (
          <ServiceInfoModal
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
