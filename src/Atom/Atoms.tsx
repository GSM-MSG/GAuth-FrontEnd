import { atom } from 'recoil';
import {
  LoginFormProps,
  ClientInform,
  FixModalType,
  ClientListType,
} from '../types';
import { StuListType } from '../types/StuListType';
import { StulistFilterType } from '../types/StulistFilterType';
import { ServiceOwnerModalType } from '../types/components/ServiceOwnerModalType';

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

export const Filter = atom<StulistFilterType>({
  key: 'filter',
  default: {
    role: 'ROLE_STUDENT',
    grade: '0',
    classNum: '0',
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

export const isDelete = atom({ key: 'isDelete', default: false });

export const ServiceCheckList = atom<ClientListType[]>({
  key: 'serviceCheckList',
  default: [],
});

export const ServiceOwnerModal = atom<ServiceOwnerModalType>({
  key: 'ServiceOwnerModal',
  default: '',
});
