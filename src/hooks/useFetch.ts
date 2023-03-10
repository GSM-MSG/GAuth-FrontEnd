import { isAxiosError } from 'axios';
import { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import API from '../api';
import Props from '../types/hooks/useFetch';

const useFetch = <T>({
  url,
  method,
  onSuccess,
  onFailure,
  successMessage,
  errorMessage,
}: Props<T>) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const fetch = useCallback(
    async (body: any) => {
      setLoading(true);

      try {
        const { data } = await API({
          url: url,
          method: method,
          data: body,
        });
        setData(data);

        if (successMessage) toast.success(successMessage);
        if (onSuccess) await onSuccess(data);
      } catch (e) {
        if (!isAxiosError(e))
          return toast.error('알 수 없는 에러가 발생했습니다');
        else if (e.response && e.response.status >= 500)
          toast.error('알 수 없는 에러가 발생했습니다');
        else if (errorMessage)
          await toast.error('알 수 없는 에러가 발생했습니다');

        if (onFailure) await onFailure(e);
      } finally {
        setLoading(false);
      }
    },
    [url, method, onSuccess, onFailure, successMessage, errorMessage]
  );

  return { data, isLoading, fetch };
};

export default useFetch;
