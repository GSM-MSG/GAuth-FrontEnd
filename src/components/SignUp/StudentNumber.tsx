import { useResetModal } from '../../hooks/useResetModal';
import { SubmitWrapper } from '../common/Auth/style';
import CreateTitle from '../common/CreateTitle';
import Input from '../common/Input';
import { InputWrapper } from '../common/Input/style';
import { useForm } from 'react-hook-form';
import { Form } from '../Stulist/AddUser/style';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { ModalPage, NumberInfo } from '../../Atom/Atoms';

export default function StudentNumber() {
  const [numberInfo, setNumberInfo] = useRecoilState(NumberInfo);
  const setModalPage = useSetRecoilState(ModalPage);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ grade: number; classNum: number; number: number }>({
    shouldUseNativeValidation: true,
  });

  const submit = async (data: {
    grade: number;
    classNum: number;
    number: number;
  }) => {
    setNumberInfo(data);
    setModalPage(6);
  };

  return (
    <>
      <CreateTitle
        title={'회원가입'}
        logo={true}
        subTitle={'배정 받은 학번을 입력해주세요.'}
      />
      <Form onSubmit={handleSubmit(submit)}>
        <InputWrapper style={{ width: '100%', height: '100%' }}>
          <Input
            label={'학년'}
            errors={!!errors.grade}
            register={register('grade', {
              required: '학년을 입력하지 않았습니다',
              pattern: {
                value: /^[0-9]*$/,
                message: '숫자만 입력해주세요',
              },
            })}
          />
          <Input
            label={'반'}
            errors={!!errors.classNum}
            register={register('classNum', {
              required: '반을 입력하지 않았습니다',
              pattern: {
                value: /^[0-9]*$/,
                message: '숫자만 입력해주세요',
              },
            })}
          />
          <Input
            label={'번호'}
            errors={!!errors.number}
            register={register('number', {
              required: '번호를 입력하지 않았습니다',
              pattern: {
                value: /^[0-9]*$/,
                message: '숫자만 입력해주세요',
              },
            })}
          />
        </InputWrapper>
        <SubmitWrapper>
          <button type="submit">다음</button>
        </SubmitWrapper>
      </Form>
    </>
  );
}
