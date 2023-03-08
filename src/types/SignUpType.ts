import { LoginFormProps } from './LoginForm';

export interface SignUpType extends LoginFormProps {
  privacy: boolean;
  profileUrl: string;
}
