import { useEffect, useState } from 'react';
import { API } from '../../lib/API';
import ListItem from './ListItem';
import * as S from './style';
import { ClientListType } from '../../types';

export default function ListTable() {
  const [serviceList, setServiceList] = useState<ClientListType[]>([]);
  useEffect(() => {
    const getAllList = async () => {
      const data = await API.get('/client');
      setServiceList(data.data);
    };
    getAllList();
  }, []);

  return (
    <S.ListTableLayer>
      <S.ListTitle>
        <a>미리보기 사진</a>
        <a>서비스 이름</a>
        <a>URL</a>
      </S.ListTitle>
      <S.ListWrapper>
        {serviceList.map((listItem, index) => (
          <ListItem key={index} listData={listItem} />
        ))}
      </S.ListWrapper>
    </S.ListTableLayer>
  );
}
