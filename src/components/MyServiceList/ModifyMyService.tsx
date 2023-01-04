import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { API } from '../../lib/API';
import { accessToken } from '../../lib/Token';
import { ClientListType } from '../../types';
import * as S from './style';
import * as SVG from '../../../public/svg';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import { UserLists } from '../../Atom/Atoms';
import { AxiosError } from 'axios';

export default function ModifyMyService({
  modifyItem,
  setModifyItem,
}: {
  modifyItem: ClientListType;
  setModifyItem: () => void;
}) {
  const { register, watch, reset, handleSubmit } = useForm();
  const setUserLists = useSetRecoilState(UserLists);
  const regUri = /^(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi;

  useEffect(() => {
    const getServiceDetail = async () => {
      try {
        const data = await API.get(`/client/${modifyItem.id}`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem(accessToken),
          },
        });
        if (data.status !== 200)
          return toast.error('서비스 요청이 실패하였습니다,');
        reset({ ...data.data });
      } catch (e) {
        if (!(e instanceof AxiosError))
          return toast.error('예상치 못한 오류가 발생하였습니다.');
      }
    };

    const scrollY = window.scrollY;
    document.body.style.cssText = `
    overflow: hidden;
    top: -${scrollY}px;
    width: 100%;
    `;
    getServiceDetail();
    return () => {
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt('-' + scrollY.toString() || '0', 10) * -1);
    };
  }, [modifyItem, reset]);

  const ModifyService = async (value: FieldValues) => {
    try {
      const { serviceName, serviceUri, redirectUri } = value;
      const data = await API.patch(
        `/client/${modifyItem.id}`,
        {
          serviceName: serviceName,
          serviceUri: serviceUri,
          redirectUri: redirectUri,
        },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem(accessToken),
          },
        }
      );
      if (data.status !== 204) return;
      toast.success('변경사항이 적용되었습니다.');
      GetMyLists();
    } catch (e) {
      if (!(e instanceof AxiosError))
        return toast.error('예상치 못한 오류가 발생하였습니다.');
      if (e.response?.status === 404)
        return toast.error('해당 서비스를 찾을수 없습니다.');
    }
  };

  const GetMyLists = async () => {
    try {
      const data = await API.get('/client', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem(accessToken),
        },
      });
      if (data.status !== 200) return;
      setUserLists(data.data);
      setModifyItem();
    } catch (e) {
      if (!(e instanceof AxiosError))
        return toast.error('예상치 못한 오류가 발생하였습니다.');
    }
  };

  const CheckError = (data: FieldValues) => {
    toast.error(Object.values(data)[0].message);
  };

  return (
    <>
      <S.ModifyModalBackGround>
        <S.ModifyModalLayer>
          <h1>서비스 정보 수정</h1>
          <form onSubmit={handleSubmit(ModifyService, CheckError)}>
            <label>
              <h3>서비스명</h3>
              <S.ModifyInput
                type="text"
                {...register('serviceName', {
                  required: '서비스명을 입력하지 않았습니다.',
                  pattern: {
                    value: /\S+/,
                    message: '서비스명을 입력하지 않았습니다.',
                  },
                })}
              />
            </label>
            <label>
              <h3>서비스 URI</h3>
              <S.ModifyInput
                type="text"
                {...register('serviceUri', {
                  required: '사이트 URI를 입력하지 않았습니다.',
                  pattern: {
                    value: regUri,
                    message: '사이트 URI를 형식에 맞게 입력해주세요',
                  },
                })}
              />
            </label>
            <label>
              <h3>리다이렉트 URI</h3>
              <S.ModifyInput
                type="text"
                {...register('redirectUri', {
                  required: '리다이렉트 URI를 입력하지 않았습니다.',
                  pattern: {
                    value: regUri,
                    message: '리다이렉트 URI를 형식에 맞게 입력해주세요',
                  },
                })}
              />
            </label>
            <label>
              <h3>클라이언트 ID</h3>
              <div>
                <i
                  onClick={() => {
                    navigator.clipboard.writeText(watch('clientId'));
                    toast.info('텍스트가 복사 되었습니다.');
                  }}
                >
                  <SVG.CopyButton />
                </i>
                <S.CopyInput type="text" {...register('clientId')} readOnly />
              </div>
            </label>
            <label>
              <h3>클라이언트 SECRET</h3>
              <div>
                <i
                  onClick={() => {
                    navigator.clipboard.writeText(watch('clientSecret'));
                    toast.info('텍스트가 복사 되었습니다.');
                  }}
                >
                  <SVG.CopyButton />
                </i>
                <S.CopyInput
                  type="text"
                  {...register('clientSecret')}
                  readOnly
                />
              </div>
            </label>
            <button type="submit">확인</button>
          </form>
        </S.ModifyModalLayer>
      </S.ModifyModalBackGround>
    </>
  );
}
