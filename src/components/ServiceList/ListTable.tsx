import { useEffect, useState } from 'react';
import ListItem from './ListItem';
import * as S from './style';
import { ClientListType } from '../../types';
import useFetch from '../../hooks/useFetch';

export default function ListTable() {
  const [serviceList, setServiceList] = useState<ClientListType[]>([]);

  const { fetch: getAllList } = useFetch<ClientListType[]>({
    url: '/client',
    method: 'get',
    onSuccess: (data) => {
      if (data) setServiceList(data);
    },
  });

  useEffect(() => {
    getAllList();
  }, []);

  return (
    <S.ListTableWrapper>
      {serviceList.map((listItem, index) => (
        <ListItem key={index} listData={listItem} />
      ))}
    </S.ListTableWrapper>
  );
}
