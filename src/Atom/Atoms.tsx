import { atom } from 'recoil';
import { LoginFormProps } from '../types';
import { ClientInform } from '../types/ClientInForm';
import { FixModalType } from '../types/FixModalType';

export const ViewWidth = atom<number>({
  key: 'viewWidth',
  default: 0,
});

export const User = atom<ClientInform>({
  key: 'user',
  default: {
    email: '',
    name: '',
    grade: 0,
    classNum: 0,
    number: 0,
    profileUrl: null,
    clientList: [],
  },
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

export const FixService = atom<FixModalType>({
  key: 'fixModalType',
  default: {
    id: undefined,
    type: '',
    toggle: false,
  },
});
