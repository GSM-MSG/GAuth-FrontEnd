import { useEffect, useState } from 'react';
import { API } from '../lib/API';
import { accessToken } from '../lib/Token';

type UserType = {
  email: string;
  name: string;
  grade: number | null;
  classNum: number | null;
  number: number | null;
  profileUrl: string | null;
  clientList: ClientListType[];
};

interface ClientListType {
  id: number;
  clientId: String;
  serviceName: String;
  serviceUri: String;
}

export const useUser = (): [UserType, () => void] => {
  const [user, setUser] = useState<UserType>({
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
      console.log(e);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return [user, getUser];
};
