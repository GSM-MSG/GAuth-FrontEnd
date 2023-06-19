import * as S from './style';
import * as SVG from '../../../../public/svg';
import { useUser } from '../../../hooks/useUser';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { FixService } from '../../../Atom/Atoms';
import useFetch from '../../../hooks/useFetch';
import { ServiceCheckList } from '../../../Atom/Atoms';
import { ClientListType } from '../../../types';

export default function DeleteService() {
  const [user, getUser] = useUser(false);
  const setFix = useSetRecoilState(FixService);
  const [serviceCheckList, setServiceCheckList] =
    useRecoilState(ServiceCheckList);

  const { fetch } = useFetch({
    url: `/client?ids=${serviceCheckList.map((data) => data.id).join()}`,
    method: 'delete',
    onSuccess: () => {
      getUser();
      setFix({
        id: undefined,
        type: '',
        toggle: false,
      });
      setServiceCheckList([]);
    },
    successMessage: '삭제 되었습니다.',
    errorMessage: {
      403: '해당 서비스는 삭제 할 수 업습니다',
      404: '해당 서비스를 찾을수 없습니다.',
    },
  });

  return (
    <S.Wrapper>
      <h1>서비스 삭제</h1>
      <div>
        <S.Title>
          <SVG.ErrorIcon />
          <h4>정말 삭제하실건가요?</h4>
          <S.ServiceNameWrapper>
            <div>
              {serviceCheckList.map(
                (data: ClientListType, index) =>
                  index < 3 && (
                    <p key={index}>
                      {data.serviceName.length > 12
                        ? data.serviceName.slice(0, 4) +
                          '...' +
                          data.serviceName.slice(
                            data.serviceName.length - 4,
                            data.serviceName.length
                          )
                        : data.serviceName}
                    </p>
                  )
              )}
            </div>
            {serviceCheckList.length > 3 && (
              <p>외 {serviceCheckList.length - 3}개</p>
            )}
          </S.ServiceNameWrapper>
        </S.Title>
        <S.ButtonWrapper>
          <S.Button modeType={true} onClick={() => fetch()}>
            삭제
          </S.Button>
          <S.Button
            modeType={false}
            onClick={() =>
              setFix((prev) => {
                return {
                  ...prev,
                  type: '',
                };
              })
            }
          >
            취소
          </S.Button>
        </S.ButtonWrapper>
      </div>
    </S.Wrapper>
  );
}
