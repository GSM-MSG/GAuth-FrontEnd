import { useCallback, useEffect, useState } from 'react';
import { API } from '../lib/API';
import { accessToken } from '../lib/Token';
import { ClientInform } from '../types';
import { toast } from 'react-toastify';

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
        email: data.email,
        name: data.name,
        grade: data.grade,
        classNum: data.classNum,
        number: data.number,
        profileUrl: data.profileUrl,
        clientList: data.clientList,
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
