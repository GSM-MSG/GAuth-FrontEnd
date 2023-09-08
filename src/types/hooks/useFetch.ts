import { AxiosError, Method } from 'axios';

interface Props<T> {
  url: string;
  method: Method;
  onSuccess?: (data: T) => void | Promise<void>;
  onFailure?: (e: AxiosError) => void | Promise<void>;
  onFinaly?: () => void;
  successMessage?: string;
  errorMessage?: { [status: number]: string };
  headers?: { [key: string]: string };
}

export default Props;
