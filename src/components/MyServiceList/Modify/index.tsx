import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import * as SVG from '../../../../public/svg';
import { toast } from 'react-toastify';
import { useUser } from '../../../hooks/useUser';
import Input from '../../common/Input';
import * as S from './style';
import useFetch from '../../../hooks/useFetch';
import { ResNewService } from '../../../types/ResAddService';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function ModifyMyService({ modifyId }: { modifyId: string }) {
  const {
    register,
    watch,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const [user, getUser] = useUser(true);
  const [serviceScope, setServiceScope] = useState<string>('');
  const regUri = /^(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi;
  const [serviceImgUrl, setServiceImgUrl] = useState('');
  const router = useRouter();

  const { fetch: getService } = useFetch<ResNewService>({
    url: `/client/${modifyId}`,
    method: 'get',
    onSuccess: (data) => {
      reset({ ...data });
      setServiceImgUrl(data.serviceImgUrl);
      setServiceScope(data.serviceScope);
    },
  });

  const { fetch } = useFetch({
    url: `/client/${modifyId}`,
    method: 'patch',
    onSuccess: () => {
      router.push('/myprofile');
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
      serviceImgUrl,
    });
  };

  const CheckError = (data: FieldValues) => {
    toast.error(Object.values(data)[0].message);
  };

  const ChangeServiceScope = () => {
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
    <S.Container>
      <S.Wrapper>
        <S.TitleWrapper>
          <S.Title>
            <h1>서비스 정보 수정</h1>
          </S.Title>
          <S.ButtonWrapper>
            <button onClick={handleSubmit(ModifyService, CheckError)}>
              완료
            </button>
            <button onClick={() => router.push('/myprofile')}>취소</button>
          </S.ButtonWrapper>
        </S.TitleWrapper>
        <S.SectionWrapper>
          <S.Section>
            <S.ContentSection>
              <div>
                <Input
                  label={'서비스명*'}
                  errors={!!errors.error}
                  register={register('serviceName', {
                    required: '서비스명을 입력하지 않았습니다.',
                    pattern: {
                      value: /\S+/,
                      message: '서비스명을 입력하지 않았습니다.',
                    },
                    maxLength: {
                      value: 29,
                      message: '서비스명은 30자 미만이어야 합니다.',
                    },
                  })}
                />

                <Input
                  label={'리다이렉트 URI*'}
                  errors={!!errors.error}
                  register={register('redirectUri', {
                    required: '리다이렉트 URI를 입력하지 않았습니다.',
                    pattern: {
                      value: regUri,
                      message: '리다이렉트 URI를 형식에 맞게 입력해주세요',
                    },
                    maxLength: {
                      value: 254,
                      message: '리다이렉트 URI는 254자 미만이어야 합니다.',
                    },
                  })}
                />
                <Input
                  label={'서비스 URI*'}
                  errors={!!errors.error}
                  register={register('serviceUri', {
                    required: '서비스 URI를 입력하지 않았습니다.',
                    pattern: {
                      value: regUri,
                      message: '서비스 URI를 형식에 맞게 입력해주세요',
                    },
                    maxLength: {
                      value: 254,
                      message: '서비스 URI는 254자 미만이어야 합니다.',
                    },
                  })}
                />
              </div>
              <S.Scope>
                <p>공개 여부 :</p>
                <div onClick={ChangeServiceScope}>
                  {serviceScope === 'PUBLIC' ? (
                    <SVG.ServicePublic />
                  ) : (
                    <SVG.ServicePrivate />
                  )}
                </div>
              </S.Scope>
            </S.ContentSection>
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
                      toast.info('텍스트가 복사되었습니다.');
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
                      toast.info('텍스트가 복사되었습니다.');
                    }}
                  >
                    <SVG.CopyIcon />
                  </i>
                </p>
                <h4>{watch('clientSecret')}</h4>
              </S.CopyTitle>
            </S.CopyWrapper>
          </S.Section>
        </S.SectionWrapper>
        <S.Border />
      </S.Wrapper>
    </S.Container>
  );
}
