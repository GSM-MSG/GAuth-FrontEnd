import { useEffect, useState } from 'react';
import { API } from '../lib/API';
import { accessToken } from '../lib/Token';

export function useUser() {
  type User = {
    email: string;
    name: string;
    grade: number;
    classNum: number;
    number: number;
    profileUrl: string | null;
  };
  const [user, setUser] = useState<User>({
    email: '',
    name: '',
    grade: 0,
    classNum: 0,
    number: 0,
    profileUrl: null,
  });

  const getUser = async () => {
    try {
      const { data } = await API.get('/user', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem(accessToken),
        },
      });
      setUser({
        email: data.email,
        name: data.name,
        grade: data.grade,
        classNum: data.classNum,
        number: data.number,
        profileUrl: data.profileUrl,
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return { user, getUser };
}
