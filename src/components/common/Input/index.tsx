import { UseFormRegisterReturn } from 'react-hook-form';
import * as S from './style';

interface Props {
  label: string;
  errors: boolean;
  message?: string;
  register?: UseFormRegisterReturn;
  type?: string;
  fixed?: string;
}

export default function Input({
  label,
  errors,
  message,
  register,
  type = 'text',
  fixed,
}: Props) {
  return (
    <S.Wrapper>
      <S.Label errors={errors}>
        {errors && '* '}
        {label}
        {message && ' - ' + message}
      </S.Label>
      <S.InputWrapper>
        <S.Input type={type} {...register} autoComplete="on" />
        <S.FixedInputValue>{fixed}</S.FixedInputValue>
      </S.InputWrapper>
    </S.Wrapper>
  );
}
