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

export default function InsertStuInfo({ onClose, onAccept }: Props) {
  const MALE = 'MALE';
  const FEMALE = 'FEMALE';

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ name: string; stuNum: string; gender: 'MALE' | 'FEMALE' }>({
    shouldUseNativeValidation: true,
  });

  const onSubmit = ({
    name,
    stuNum,
    gender,
  }: {
    name: string;
    stuNum: string;
    gender: 'MALE' | 'FEMALE';
  }) => {
    onAccept({
      name,
      gender,
      grade: parseInt(stuNum.substring(0, 1)),
      classNum: parseInt(stuNum.substring(1, 2)),
      num: parseInt(stuNum.substring(2, 4)),
    });

    onClose();
  };

  return (
    <>
      <CreateTitle
        title={'사용자 등록'}
        logo={true}
        subTitle={'승인하실 학생의 정보를 입력해주세요.'}
      />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <S.Wrapper>
          <Input
            label="이름"
            errors={!!errors.name}
            message={errors.name?.message}
            register={register('name', {
              required: '이름을 입력하지 않았습니다',
            })}
            maxLength={5}
          />
          <Input
            label="학번"
            errors={!!errors.stuNum}
            message={errors.stuNum?.message}
            register={register('stuNum', {
              required: '학번을 입력하지 않았습니다',
              pattern: {
                value: /^\d{4}$/,
                message: '학번 숫자 4자리를 입력해주세요.',
              },
            })}
            fixed="ex)1401"
            maxLength={5}
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
                id={'여자'}
                {...register('gender', { required: true })}
              />
              <S.Label htmlFor={'여자'}>여자</S.Label>
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
