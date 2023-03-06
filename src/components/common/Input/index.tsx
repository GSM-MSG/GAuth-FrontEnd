import { UseFormRegisterReturn } from 'react-hook-form';
import * as S from './style';

interface Props {
  label: string;
  errors: boolean;
  register?: UseFormRegisterReturn;
  type?: string;
  fixed?: string;
}

export default function Input({
  label,
  errors,
  register,
  type = 'text',
  fixed,
}: Props) {
  return (
    <S.Wrapper>
      <S.Label errors={errors}>
        {errors && '* '}
        {label}
      </S.Label>
      <S.InputWrapper>
        <S.Input type={type} {...register} />
        <S.FixedInputValue>{fixed}</S.FixedInputValue>
      </S.InputWrapper>
    </S.Wrapper>
  );
}
