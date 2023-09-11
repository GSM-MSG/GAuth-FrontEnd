import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import * as SVG from '../../../../public/svg';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { FixService } from '../../../Atom/Atoms';
import { useUser } from '../../../hooks/useUser';
import Input from '../../common/Input';
import * as S from './style';
import useFetch from '../../../hooks/useFetch';
import { ResNewService } from '../../../types/ResAddService';
import Image from 'next/image';

export default function ModifyMyService() {
  const {
    register,
    watch,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const [user, getUser] = useUser(true);
  const [serviceScope, setServiceScope] = useState<string>('');

  const [fix, setFix] = useRecoilState(FixService);

  const regUri = /^(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi;

  const [serviceImgUrl, setServiceImgUrl] = useState('');

  const { fetch: getService } = useFetch<ResNewService>({
    url: `/client/${fix.id}`,
    method: 'get',
    onSuccess: (data) => {
      reset({ ...data });
      setServiceScope(data.serviceScope);
      setServiceImgUrl(data.serviceImgUrl);
    },
  });

  const { fetch } = useFetch({
    url: `/client/${fix.id}`,
    method: 'patch',
    onSuccess: () => {
      toast.success('변경사항이 적용되었습니다.');
      getUser();
    },
    onFinaly: () => {
      setFix({
        id: undefined,
        type: '',
        toggle: false,
      });
    },
    errorMessage: {
      404: '해당 서비스를 찾을수 없습니다.',
    },
  });

  useEffect(() => {
    getService();
  }, []);

  const ModifyService = async (value: FieldValues) => {
    const { serviceName, serviceUri, redirectUri } = value;
    fetch({
      serviceName,
      serviceUri,
      redirectUri,
      serviceScope,
      serviceImgUrl: serviceImgUrl,
    });
  };

  const CheckError = (data: FieldValues) => {
    toast.error(Object.values(data)[0].message);
  };

  const ChangeSeviceScope = () => {
    setServiceScope((prev) => (prev === 'PUBLIC' ? 'PRIVATE' : 'PUBLIC'));
  };

  const { fetch: uploadImage } = useFetch<{ imageURL: string }>({
    url: '/image',
    method: 'post',
    onSuccess: (data) => {
      if (data) {
        setServiceImgUrl(data.imageURL);
      }
    },
  });

  const handleFileUpload = async (file: File) => {
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    const fileExtension = file.name.split('.').pop();

    if (allowedExtensions.exec('.' + fileExtension)) {
      const formData = new FormData();
      formData.append('image', file);
      uploadImage(formData);
    }
  };

  const { fetch: deleteImage } = useFetch({
    url: `/image?url=${serviceImgUrl}`,
    method: 'delete',
    onSuccess: () => setServiceImgUrl(''),
  });

  return (
    <S.Wrapper>
      <S.Section>
        <h1>서비스 정보 수정</h1>
        <form onSubmit={handleSubmit(ModifyService, CheckError)}>
          <S.ContentSection>
            <div>
              <Input
                label={'서비스명'}
                errors={!!errors.error}
                register={register('serviceName', {
                  required: '서비스명을 입력하지 않았습니다.',
                  pattern: {
                    value: /\S+/,
                    message: '서비스명을 입력하지 않았습니다.',
                  },
                  maxLength: 29,
                })}
              />
              <Input
                label={'리다이렉트 URI'}
                errors={!!errors.error}
                register={register('redirectUri', {
                  required: '사이트 URI를 입력하지 않았습니다.',
                  pattern: {
                    value: regUri,
                    message: '리다이렉트 URI를 형식에 맞게 입력해주세요',
                  },
                  maxLength: 254,
                })}
              />
              <Input
                label={'서비스 URI'}
                errors={!!errors.error}
                register={register('serviceUri', {
                  required: '사이트 URI를 입력하지 않았습니다.',
                  pattern: {
                    value: regUri,
                    message: '사이트 URI를 형식에 맞게 입력해주세요',
                  },
                  maxLength: 254,
                })}
              />
            </div>
            <S.Scope>
              <p>공개 여부 :</p>
              <div onClick={ChangeSeviceScope}>
                {serviceScope === 'PUBLIC' ? (
                  <SVG.ServicePublic />
                ) : (
                  <SVG.ServicePrivate />
                )}
              </div>
            </S.Scope>
          </S.ContentSection>
          <button type="submit">수정</button>
        </form>
      </S.Section>
      <S.Section>
        <S.ImgContainer>
          <label htmlFor="file">
            {serviceImgUrl ? (
              <S.UploadContainer>
                <S.DeleteServiceWrapper
                  onClick={(e) => {
                    e.preventDefault();
                    deleteImage();
                  }}
                >
                  <SVG.DeleteServiceImg />
                </S.DeleteServiceWrapper>
                <Image
                  src={serviceImgUrl}
                  alt="업로드한 이미지"
                  layout="fill"
                  objectFit="cover"
                />
              </S.UploadContainer>
            ) : (
              <>
                <SVG.AddServiceImg />
                <div>이미지 업로드</div>
              </>
            )}
          </label>
          <input
            type="file"
            name="image"
            id="file"
            onChange={(e) => {
              const selectedFile = e.target.files?.[0];
              if (selectedFile) {
                handleFileUpload(selectedFile);
              }
            }}
          />
        </S.ImgContainer>
        <S.CopyWrapper>
          <S.CopyTitle>
            <p>
              클라이언트 ID
              <i
                onClick={() => {
                  navigator.clipboard.writeText(watch('clientId'));
                  toast.info('텍스트가 복사 되었습니다.');
                }}
              >
                <SVG.CopyIcon />
              </i>
            </p>
            <h4>{watch('clientId')}</h4>
          </S.CopyTitle>
          <S.CopyTitle>
            <p>
              클라이언트 SECRET
              <i
                onClick={() => {
                  navigator.clipboard.writeText(watch('clientSecret'));
                  toast.info('텍스트가 복사 되었습니다.');
                }}
              >
                <SVG.CopyIcon />
              </i>
            </p>
            <h4>{watch('clientSecret')}</h4>
          </S.CopyTitle>
        </S.CopyWrapper>
      </S.Section>
    </S.Wrapper>
  );
}
