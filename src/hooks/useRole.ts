import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { Role } from '../Atom/Atoms';
import { RoleListType } from '../types/RoleListType';
import useFetch from './useFetch';

export const useRole = () => {
  const setRole = useSetRecoilState(Role);

  const { fetch: getRole } = useFetch<RoleListType>({
    url: '/user/role',
    method: 'get',
    onSuccess: (data) => {
      setRole(data.roles);
    },
  });

  useEffect(() => {
    getRole();
  }, []);

  return { getRole };
};
