import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as SVG from '../../../public/svg';
import useFetch from '../../hooks/useFetch';
import { NewServiceForm, ResNewService } from '../../types/ResAddService';
import Input from '../common/Input';
import ServiceInfoModal from './InfoModal';
import * as S from './style';
import ServiceOwnerList from './ServiceOwnerList';
import { useUser } from '../../hooks/useUser';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedUsersState } from '../../Atom/Atoms';

export default function NewServicePage() {
  const regUrl =
    /^(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}([\/a-z0-9-%#?&=\w])+(\.[a-z0-9]{2,4}(\?[\/a-z0-9-%#?&=\w]+)*)*/gi;

  const [modal, setModal] = useState<boolean>(false);
  const [Ownermodal, setOwnermodal] = useState<boolean>(false);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [serviceId, setServiceId] = useState<number>();

  const serviceDefaultData: ResNewService = {
    clientId: '',
    clientSecret: '',
    redirectUri: '',
    serviceName: '',
    serviceUri: '',
    serviceScope: 'PUBLIC',
    serviceImgUrl: '',
  };
  const [user] = useUser();
  const [serviceData, setServiceData] =
    useState<ResNewService>(serviceDefaultData);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<NewServiceForm>({
    defaultValues: serviceData,
  });

  const onClose = () => {
    setModal(false);
    reset(serviceDefaultData);
    setServiceData({
      ...serviceData,
      serviceImgUrl: '',
    });
    setServiceScope('PUBLIC');
  };

  const [serviceScope, setServiceScope] = useState('PUBLIC');

  const handleClose = () => {
    setServiceScope((prev) => (prev === 'PUBLIC' ? 'PRIVATE' : 'PUBLIC'));
  };

  const { fetch } = useFetch<ResNewService>({
    url: '/client',
    method: 'post',
    onSuccess: (data) => {
      setServiceData(data);
      setModal(true);
      reset();
      setServiceId(data.id);
    },
  });

  useEffect(() => {
    updateCoWorkersHandler();
  }, [serviceId]);

  const { fetch: uploadImage } = useFetch<{ imageURL: string }>({
    url: '/image',
    method: 'post',
    onSuccess: (data) => {
      if (data) {
        setServiceData({
          ...serviceData,
          serviceImgUrl: data.imageURL,
        });
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

  const onSubmit = async (inputs: NewServiceForm) =>
    fetch({
      serviceName: inputs.serviceName,
      serviceUri: inputs.serviceUri,
      redirectUri: inputs.redirectUri,
      serviceScope: serviceScope,
      serviceImgUrl: serviceData.serviceImgUrl,
    });

  const { fetch: deleteImage } = useFetch({
    url: `/image?url=${serviceData.serviceImgUrl}`,
    method: 'delete',
    onSuccess: () =>
      setServiceData({
        ...serviceData,
        serviceImgUrl: '',
      }),
  });

  const selectedUsers = useRecoilValue(selectedUsersState);
  const setSelectedUsers = useSetRecoilState(selectedUsersState);

  useEffect(() => {
    setSelectedUsers([]);
  }, [setSelectedUsers]);

  const { fetch: patchUpdateCoWorkers } = useFetch({
    url: `/client/${serviceId}/co-worker`,
    method: 'PATCH',
  });

  const updateCoWorkersHandler = () => {
    selectedUsers.forEach(async (user) => {
      await patchUpdateCoWorkers({ userId: user.id });
    });
    setSelectedUsers([]);
  };

  return (
    <S.Layout>
      <S.Wrapper>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.TitleSection>
            <h1>서비스를 등록해볼까요?</h1>
            <h3>서비스 등록도, 학생정보 수집도 쉽게!</h3>
          </S.TitleSection>
          <S.Container>
            <S.InputContainer>
              <Input
                label="서비스명"
                errors={!!errors.serviceName}
                message={errors.serviceName?.message}
                register={register('serviceName', {
                  required: '서비스명을 입력하지 않았습니다.',
                  pattern: {
                    value: /\S+/,
                    message: '서비스명을 입력하지 않았습니다.',
                  },
                })}
                maxLength={20}
              />
              <Input
                label="리다이렉트 URL"
                errors={!!errors.redirectUri}
                message={errors.redirectUri?.message}
                register={register('redirectUri', {
                  required: '리다이렉트 URI를 입력하지 않았습니다.',
                  pattern: {
                    value: regUrl,
                    message: '리다이렉트 URL를 형식에 맞게 입력해주세요',
                  },
                })}
                maxLength={254}
              />
              <Input
                label="사이트 URL"
                errors={!!errors.serviceUri}
                message={errors.serviceUri?.message}
                register={register('serviceUri', {
                  required: '서비스 URI를 입력하지 않았습니다.',
                  pattern: {
                    value: regUrl,
                    message: '서비스 URI를 형식에 맞게 입력해주세요',
                  },
                })}
                maxLength={254}
              />
              <S.ImgContainer>
                <label htmlFor="file">
                  {serviceData.serviceImgUrl ? (
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
                        src={serviceData.serviceImgUrl}
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
                <p>이미지 용량 제한은 5MB입니다.</p>
              </S.ImgContainer>
              <span>
                공개여부:{' '}
                {serviceScope === 'PUBLIC' ? (
                  <div onClick={handleClose}>
                    <SVG.ServicePublic />
                  </div>
                ) : (
                  <div onClick={handleClose}>
                    <SVG.ServicePrivate />
                  </div>
                )}
              </span>
              <S.OwnerButton
                type="button"
                onClick={() => {
                  setOwnermodal(true);
                  setIsAdd(true);
                }}
              >
                공동작업자 추가
              </S.OwnerButton>
              <S.Submit type="submit">등록</S.Submit>
            </S.InputContainer>
            <S.CollaboratorWrapper>
              <S.ManagerWrapper
                onClick={(e) => {
                  setOwnermodal(true);
                  setIsAdd(true);
                }}
              >
                <p>공동작업자 추가</p>
                <S.Add>
                  <SVG.AddMangerBlue />
                  <p>추가</p>
                </S.Add>
              </S.ManagerWrapper>
              <S.MemberContainer>
                {
                  <S.Member>
                    <S.Profile>
                      {user.profileUrl ? (
                        <S.Circle>
                          <Image
                            src={user.profileUrl}
                            alt="프로필 이미지"
                            width={24}
                            height={24}
                            objectFit="cover"
                          />
                        </S.Circle>
                      ) : (
                        <SVG.ProfileSmallFace />
                      )}
                      {user.name}
                    </S.Profile>
                    소유자
                  </S.Member>
                }
                {selectedUsers.slice(0, 13).map((member, index) => (
                  <S.Member key={index}>
                    <S.Profile>
                      {member.profileUrl ? (
                        <S.Circle>
                          <Image
                            src={member.profileUrl}
                            alt="프로필 이미지"
                            width={24}
                            height={24}
                            objectFit="cover"
                          />
                        </S.Circle>
                      ) : (
                        <SVG.ProfileSmallFace />
                      )}
                      {member.name}
                    </S.Profile>
                    공동작업자
                  </S.Member>
                ))}
              </S.MemberContainer>
              {selectedUsers.length > 13 && (
                <S.SeeMoreCollaborators
                  onClick={() => {
                    setOwnermodal(true);
                    setIsAdd(false);
                  }}
                >
                  <p>{selectedUsers.length - 13}명의 공동작업자 더보기</p>
                  <SVG.ChevonRight />
                </S.SeeMoreCollaborators>
              )}
            </S.CollaboratorWrapper>
          </S.Container>
        </S.Form>

        {modal && (
          <ServiceInfoModal serviceData={serviceData} onClose={onClose} />
        )}
        {Ownermodal && (
          <ServiceOwnerList
            userId={user.userId}
            onClose={() => setOwnermodal(false)}
            isAdd={isAdd}
          />
        )}
      </S.Wrapper>
    </S.Layout>
  );
}
