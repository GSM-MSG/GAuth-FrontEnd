import { ReactElement } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import * as S from './style';

interface Props {
  label: string;
  errors: boolean;
  message?: string;
  register?: UseFormRegisterReturn;
  type?: string;
  fixed?: string | ReactElement;
  maxLength?: number;
  fixedHandle?: () => void;
}

export default function Input({
  label,
  errors,
  message,
  register,
  type = 'text',
  fixed,
  fixedHandle,
  maxLength,
}: Props) {
  return (
    <S.Wrapper>
      <S.Label errors={errors}>
        {errors && '* '}
        {label}
        {message && ' - ' + message}
      </S.Label>
      <S.InputWrapper>
        <S.Input
          type={type}
          {...register}
          autoComplete="on"
          maxLength={maxLength}
        />
        <S.FixedInputValue
          point={!!fixedHandle}
          onClick={() => fixedHandle && fixedHandle()}
        >
          {fixed}
        </S.FixedInputValue>
      </S.InputWrapper>
    </S.Wrapper>
  );
}
