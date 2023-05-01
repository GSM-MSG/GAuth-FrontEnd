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
    errorMessage: '유저 리스트를 찾을 수 없습니다.',
  });

  useEffect(() => {
    getAuto && getUserList();
  }, []);

  return { getUserList };
};
