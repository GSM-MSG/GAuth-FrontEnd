import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ClientListType } from '../../types';
import * as S from './style';

export default function ModifyMyService({
  modifyItem,
  setModifyItem,
}: {
  modifyItem: ClientListType;
  setModifyItem: () => void;
}) {
  const { register, watch } = useForm({ defaultValues: modifyItem });
  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.cssText = `
      overflow: hidden;
      top: -${scrollY}px;
      width: 100%;
      `;
    return () => {
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt('-' + scrollY.toString() || '0', 10) * -1);
    };
  }, []);

  return (
    <>
      <S.ModifyModalBackGround>
        <S.ModifyModalLayer>
          <h1>서비스 정보 수정</h1>
          <form>
            <input type="text" {...register('serviceName')} />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </form>
          <button onClick={() => setModifyItem()}>확인</button>
        </S.ModifyModalLayer>
      </S.ModifyModalBackGround>
    </>
  );
}
