import { atom } from 'recoil';
import { LoginFormProps, ClientInform, FixModalType } from '../types';
import { StuListType } from '../types/StuListType';

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
  default: '',
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

export const Filter = atom({
  key: 'filter',
  default: {
    role: 'ROLE_STUDENT',
    grade: '1',
    classNum: '1',
  },
});

export const StuList = atom<StuListType[]>({
  key: 'stulist',
  default: [],
});

export const Search = atom({
  key: 'search',
  default: '',
});

export const ApproveId = atom<number | undefined>({
  key: 'approveId',
  default: undefined,
});

export const Role = atom<string[]>({
  key: 'userRole',
  default: [],
});
