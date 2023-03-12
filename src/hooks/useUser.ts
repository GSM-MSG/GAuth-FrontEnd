import { useEffect, useState } from 'react';
import { accessToken } from '../lib/Token';
import { ClientInform } from '../types';
import { toast } from 'react-toastify';
import API from '../api';
import { useRecoilState } from 'recoil';
import { User } from '../Atom/Atoms';

export const useUser = (
  toggle: boolean | undefined = true
): [ClientInform, () => void] => {
  const [user, setUser] = useRecoilState(User);

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
    toggle && getUser();
  }, []);

  return [user, getUser];
};
