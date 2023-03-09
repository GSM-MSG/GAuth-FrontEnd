import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { ModalPage } from '../Atom/Atoms';
import { client_id, redirect_uri } from '../lib/OauthQuery';

export const useResetModal = () => {
  const router = useRouter();
  const isQuery =
    router.query.client_id !== undefined &&
    router.query.redirect_uri !== undefined;
  const setModalPage = useSetRecoilState(ModalPage);

  const changeModalType = (type: string) => {
    setModalPage(0);
    router.push(
      isQuery
        ? {
            pathname: type,
            query: {
              client_id: router.query[client_id],
              redirect_uri: router.query[redirect_uri],
            },
          }
        : {
            pathname: type,
          },
      type === '/login' ? undefined : type
    );
  };
  return { changeModalType };
};
