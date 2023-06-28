import { useForm } from 'react-hook-form';
import CreateTitle from '../../../../common/CreateTitle';
import Input from '../../../../common/Input';
import { SubmitWrapper } from '../../../../SignIn/style';
import { Form } from '../../style';
import * as S from './style';
import { AcceptUserType } from '../../../../../types/AcceptUserType';

interface Props {
  onClose: () => void;
  onAccept: (body: AcceptUserType) => void;
}

export default function InsertTeacherInfo({ onClose, onAccept }: Props) {
  const MALE = 'MALE';
  const FEMALE = 'FEMALE';

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ name: string; gender: 'MALE' | 'FEMALE' }>({
    shouldUseNativeValidation: true,
  });

  const onSubmit = ({
    name,
    gender,
  }: {
    name: string;
    gender: 'MALE' | 'FEMALE';
  }) => {
    onAccept({
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
