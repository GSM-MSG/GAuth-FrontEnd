import { SubmitWrapper } from '../common/Auth/style';
import CreateTitle from '../common/CreateTitle';
import Input from '../common/Input';
import { InputWrapper } from '../common/Input/style';
import { useForm } from 'react-hook-form';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { ModalPage, Name } from '../../Atom/Atoms';
import { Form } from '../Stulist/AddUser/style';

export default function StudentName() {
  const [name, setName] = useRecoilState(Name);
  const setModalPage = useSetRecoilState(ModalPage);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ name: string }>({
    shouldUseNativeValidation: true,
  });

  const submit = async ({ name }: { name: string }) => {
    setName(name);
    setModalPage(5);
  };

  return (
    <>
      <CreateTitle
        title="회원가입"
        logo={true}
        subTitle="이름을 입력해주세요."
      />
      <Form onSubmit={handleSubmit(submit)}>
        <InputWrapper>
          <Input
            label="이름"
            errors={!!errors.name}
            register={register('name', {
              required: '이름을 입력하지 않았습니다.',
              pattern: {
                value: /^[가-힣\s]+$/g,
                message: '올바른 이름을 입력해주세요.',
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
