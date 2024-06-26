import { ChangeEvent, useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import * as SVG from '../../../../public/svg';
import { toast } from 'react-toastify';
import Input from '../../common/Input';
import * as S from './style';
import useFetch from '../../../hooks/useFetch';
import { ResNewService } from '../../../types/ResAddService';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  Search,
  ServiceOwnerModal,
  ServiceDeleteModal,
  ServiceRetrieveModal,
  StuList,
} from '../../../Atom/Atoms';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import ServiceOwnerList from '../../ServiceCo-WorkerList';
import ServiceCoWorkersList from './CoWorkerModal/index';
import Assignment from './Assignment';
import DeleteAssignment from './DeleteAssignment';
import { useUser } from '../../../hooks/useUser';
import { useUserList } from '../../../hooks/useUserList';

interface Worker {
  userId: number;
}

export default function ModifyMyService({ modifyId }: { modifyId: string }) {
  const {
    register,
    watch,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const [serviceScope, setServiceScope] = useState<string>('');
  const regUri = /^(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi;
  const [serviceImgUrl, setServiceImgUrl] = useState('');
  const router = useRouter();
  const [serviceOwnerModal, setServiceOwnerModal] =
    useRecoilState(ServiceOwnerModal);
  const [serviceDeleteModal, setServiceDeleteModal] =
    useRecoilState(ServiceDeleteModal);
  const [serviceRetrieveModal, setServiceRetrieveModal] =
    useRecoilState(ServiceRetrieveModal);
  const setSearch = useSetRecoilState(Search);
  const [user] = useUser();
  const { getUserList } = useUserList({
    defaultUri: `/user/user-list?grade=0&classNum=0&keyword=&role=ROLE_STUDENT`,
  });
  const [stuId, setStuId] = useState(0);

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

  const stuList = useRecoilValue(StuList);

  const { fetch: getCoWorkers } = useFetch({
    url: `/client/${modifyId}/co-worker`,
    method: 'get',
    onSuccess: (data: Worker[]) => {
      setWorkers(data);
    },
    onFailure: () => {
      toast.error('공동작업자를 정상적으로 불러오지 못했습니다.');
    },
  });

  const [workers, setWorkers] = useState<Worker[]>([]);
  const worker = stuList.filter((e) => {
    for (let i = 0; i < workers.length; i++) {
      if (e.id !== undefined && e.id === workers[i].userId) {
        return e;
      }
    }
  });

  useEffect(() => {
    getService();
    getCoWorkers();
    getUserList();
  }, [stuId]);

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

  const closeModal = () => {
    setServiceOwnerModal('');
    setServiceDeleteModal('');
    setServiceRetrieveModal('');
    setSearch('');
  };

  const roleSwitcher = (
    event: ChangeEvent<HTMLSelectElement>,
    userId: number
  ) => {
    const select = event.target.value;
    setStuId(userId);

    if (select === 'delete') {
      setServiceDeleteModal('assignment');
    } else if (select === 'owner') {
      setServiceOwnerModal('assignment');
    }
  };

  const renderModalContent = () => {
    switch (serviceOwnerModal) {
      case 'list':
        return (
          <ServiceOwnerList
            onClose={closeModal}
            userId={user.userId}
            modifyId={modifyId}
          />
        );
      case 'assignment':
        return (
          <Assignment onClose={closeModal} modifyId={modifyId} userId={stuId} />
        );
    }

    switch (serviceDeleteModal) {
      case 'assignment':
        return (
          <DeleteAssignment
            onClose={closeModal}
            modifyId={modifyId}
            userId={stuId}
          />
        );
    }

    switch (serviceRetrieveModal) {
      case 'list':
        return (
          <ServiceCoWorkersList onClose={closeModal} modifyId={modifyId} />
        );
    }
  };

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
        <S.ManagerWrapper>
          <S.Title>
            <h2>공동작업자 관리</h2>
          </S.Title>

          <S.Add
            onClick={() => {
              setServiceOwnerModal('list');
            }}
          >
            <SVG.AddManger />
            추가
          </S.Add>
        </S.ManagerWrapper>

        <S.MemberWrapper>
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
          {worker.slice(0, 7).map((member) => (
            <S.Member key={member.id}>
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
              <S.Select
                id="role"
                onChange={(event) => {
                  roleSwitcher(event, member.id);
                }}
                value={'coworker'}
              >
                <option value="owner">소유자</option>
                <option value="coworker">공동작업자</option>
                <option value="delete">삭제</option>
              </S.Select>
            </S.Member>
          ))}

          {workers.length < 8 ? null : (
            <S.ShowList onClick={() => setServiceRetrieveModal('list')}>
              {workers.length - 7}명의 공동작업자 더보기
              <SVG.RightArrow />
            </S.ShowList>
          )}
        </S.MemberWrapper>

        {renderModalContent()}
      </S.Wrapper>
    </S.Container>
  );
}
