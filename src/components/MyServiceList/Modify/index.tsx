import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import * as SVG from '../../../../public/svg';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { isAxiosError } from 'axios';
import API from '../../../api';
import { FixService } from '../../../Atom/Atoms';
import { useUser } from '../../../hooks/useUser';
import Input from '../../common/Input';
import * as S from './style';

export default function ModifyMyService() {
  const [user, getUser] = useUser(false);

  const {
    register,
    watch,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const [fix, setFix] = useRecoilState(FixService);

  const regUri = /^(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi;

  useEffect(() => {
    (async () => {
      try {
        const data = await API.get(`/client/${fix.id}`);
        if (data.status !== 200)
          return toast.error('서비스 요청이 실패하였습니다,');
        reset({ ...data.data });
      } catch (e) {
        if (!isAxiosError(e))
          return toast.error('예상치 못한 오류가 발생하였습니다.');
      }
    })();
  }, [reset, fix]);

  const ModifyService = async (value: FieldValues) => {
    try {
      const { serviceName, serviceUri, redirectUri } = value;
      console.log(value);
      const data = await API.patch(`/client/${fix.id}`, {
        serviceName,
        serviceUri,
        redirectUri,
      });
      if (data.status !== 204) return;
      toast.success('변경사항이 적용되었습니다.');
      getUser();
      setFix({
        id: undefined,
        type: '',
        toggle: false,
      });
    } catch (e) {
      if (!isAxiosError(e))
        return toast.error('예상치 못한 오류가 발생하였습니다.');
      if (e.response?.status === 404)
        return toast.error('해당 서비스를 찾을수 없습니다.');
    }
  };

  const CheckError = (data: FieldValues) => {
    toast.error(Object.values(data)[0].message);
  };

  return (
    <S.Wrapper>
      <h1>서비스 정보 수정</h1>
      <form onSubmit={handleSubmit(ModifyService, CheckError)}>
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
          <Input
            label={'리다이렉트 URI'}
            errors={!!errors.error}
            register={register('serviceUri', {
              required: '사이트 URI를 입력하지 않았습니다.',
              pattern: {
                value: regUri,
                message: '리다이렉트 URI를 형식에 맞게 입력해주세요',
              },
              maxLength: 254,
            })}
          />
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
        </div>
        <button type="submit">확인</button>
      </form>
    </S.Wrapper>
  );
}
