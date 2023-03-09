import { Method, isAxiosError, AxiosError } from 'axios';
import { config } from 'process';
import { useState, useEffect, useCallback } from 'react';
import API from '../api';

interface Props<T> {
  url: string;
  method: Method;
  body: any;
  onSuccess: () => void | Promise<void>;
  onFailure: () => void | Promise<void>;
}

const useFetch = <T>({ url, method, body, onSuccess, onFailure }: Props<T>) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetch = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await API({
        url: url,
        method: method,
        data: body,
      });
      setData(data);
      onSuccess();
    } catch (error) {
      if (!isAxiosError(error)) {
        onFailure();
      }
    } finally {
      setLoading(false);
    }
  }, [url, method, body]);

  return { data, loading, fetch };
};

export default useFetch;
