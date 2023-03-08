import { atom } from 'recoil';
import { LoginFormProps } from '../types';
import { ClientListType } from '../types/ClientInForm';

export const ViewWidth = atom<number>({
  key: 'viewWidth',
  default: 0,
});

export const UserLists = atom<ClientListType[]>({
  key: 'userLists',
  default: [],
});

export const ModalPage = atom<number>({
  key: 'modalPage',
  default: 0,
});

export const ModalType = atom<string>({
  key: 'modalType',
  default: 'signIn',
});

export const EmailInfo = atom<LoginFormProps>({
  key: 'emailInfo',
  default: {
    email: '',
    password: '',
  },
});

export const PrivacyInfo = atom<boolean>({
  key: 'privacy',
  default: false,
});

export const FixModalToggle = atom({
  key: 'fix',
  default: {
    id: 0,
    toggle: false,
  },
});
