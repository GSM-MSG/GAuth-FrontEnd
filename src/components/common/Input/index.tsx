import { UseFormRegisterReturn } from 'react-hook-form';
import * as S from './style';

interface Props {
  label: string;
  errors: boolean;
  register?: UseFormRegisterReturn;
  type?: string;
}

export default function Input({ label, errors, register, type }: Props) {
  return (
    <S.Wrapper>
      <S.Label errors={errors}>
        {errors && '* '}
        {label}
      </S.Label>
      <S.Input type={type} {...register} />
    </S.Wrapper>
  );
}
