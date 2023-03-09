import { useEffect, useState } from 'react';

import { accessToken } from '../lib/Token';
import { ClientInform } from '../types';
import { toast } from 'react-toastify';
import API from '../api';

export const useUser = (): [ClientInform, () => void] => {
  const [user, setUser] = useState<ClientInform>({
    email: '',
    name: '',
    grade: 0,
    classNum: 0,
    number: 0,
    profileUrl: null,
    clientList: [],
  });

  const getUser = async () => {
    try {
      const { data, request } = await API.get('/user', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem(accessToken),
        },
      });
      if (request.status != 200) return;
      setUser({
        ...data,
      });
    } catch (e) {
      toast.error('error');
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return [user, getUser];
};
