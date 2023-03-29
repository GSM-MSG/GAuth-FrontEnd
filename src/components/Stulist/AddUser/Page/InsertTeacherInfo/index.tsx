import { useForm } from 'react-hook-form';
import CreateTitle from '../../../../common/CreateTitle';
import Input from '../../../../common/Input';
import { SubmitWrapper } from '../../../../NewSignIn/style';
import { useRecoilValue } from 'recoil';
import { Form } from '../../style';
import * as S from './style';
import useFetch from '../../../../../hooks/useFetch';
import { ApproveId } from '../../../../../Atom/Atoms';

interface Props {
  onClose: () => void;
}

export default function InsertTeacherInfo({ onClose }: Props) {
  const MALE = 'MALE';
  const FEMALE = 'FEMALE';
  const approveId = useRecoilValue(ApproveId);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ name: string; gender: 'MALE' | 'FEMALE' }>({
    shouldUseNativeValidation: true,
  });

  const { fetch } = useFetch({
    url: '/user/accept-teacher',
    method: 'patch',
    successMessage: '추가 완료',
    errorMessage: '실패',
  });

  const onSubmit = ({
    name,
    gender,
  }: {
    name: string;
    gender: 'MALE' | 'FEMALE';
  }) => {
    fetch({
      id: approveId,
      name,
      gender,
    });
    onClose();
  };

  return (
    <>
      <CreateTitle
        title={'사용자 등록'}
        logo={true}
        subTitle={'승인하실 선생님의 정보를 입력해주세요.'}
      />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <S.Wrapper>
          <Input
            label="성함"
            errors={!!errors.name}
            register={register('name', {
              required: '성함을 입력하지 않았습니다',
            })}
          />
          <S.SelectBox>
            <p>성별</p>
            <div>
              <S.Input
                type="radio"
                value={MALE}
                id={MALE}
                {...register('gender', { required: true })}
                checked
              />
              <S.Label htmlFor={MALE}>남자</S.Label>
              <S.Input
                type="radio"
                value={FEMALE}
                id={FEMALE}
                {...register('gender', { required: true })}
              />
              <S.Label htmlFor={FEMALE}>여자</S.Label>
            </div>
          </S.SelectBox>
        </S.Wrapper>
        <SubmitWrapper>
          <button type="submit">완료</button>
        </SubmitWrapper>
      </Form>
    </>
  );
}
