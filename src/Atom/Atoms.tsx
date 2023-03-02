import { atom } from 'recoil';
import { ClientListType } from '../types/ClientInForm';

export const ViewWidth = atom<number>({
  key: 'viewWidth',
  default: 0,
});

export const UserLists = atom<ClientListType[]>({
  key: 'userLists',
  default: [],
});

export const ModalTile = atom<string>({
  key: 'modalTitle',
  default: '',
});

export const ModalType = atom<string>({
  key: 'modalType',
  default: 'signIn',
});
