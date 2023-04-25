import { useSetRecoilState } from 'recoil';
import { StuListType } from '../types/StuListType';
import useFetch from './useFetch';
import { StuList } from '../Atom/Atoms';
import { useEffect } from 'react';

type Props = {
  defaultUri: string;
  getAuto?: boolean;
};

export const useUserList = ({ defaultUri, getAuto = true }: Props) => {
  const setStulist = useSetRecoilState(StuList);

  const { fetch: getUserList } = useFetch<StuListType[]>({
    url: defaultUri,
    method: 'get',
    onSuccess: (data) => {
      setStulist(data);
    },
  });

  useEffect(() => {
    getAuto && getUserList();
  }, []);

  return { getUserList };
};
