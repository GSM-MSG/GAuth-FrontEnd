import { atom } from 'recoil';
import {
  LoginFormProps,
  ClientInform,
  FixModalType,
  ClientListType,
  SelectedUserType,
} from '../types';
import { StuListType } from '../types/StuListType';
import { StulistFilterType } from '../types/StulistFilterType';
import {
  ServiceOwnerModalType,
  ServiceDeleteModalType,
  ServiceRetrieveModalType,
} from '../types/ServiceOwnerModalType';
import { NumberFormProps } from '../types/NumberForm';

export const ViewWidth = atom<number>({
  key: 'viewWidth',
  default: 0,
});

export const User = atom<ClientInform>({
  key: 'user',
  default: {
    userId: 0,
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

export const ServiceOwnerUserId = atom<number>({
  key: 'serviceOwnerUserId',
  default: 0,
});

export const selectedUsersState = atom<SelectedUserType[]>({
  key: 'selectedUsersState',
  default: [],
});

export const ServiceDeleteModal = atom<ServiceDeleteModalType>({
  key: 'ServiceDeleteModal',
  default: '',
});

export const ServiceRetrieveModal = atom<ServiceRetrieveModalType>({
  key: 'ServiceRetrieveModal',
  default: '',
});

export const Email = atom<string>({
  key: 'email',
  default: '',
});

export const CantFetch = atom<boolean>({
  key: 'cantFetch',
  default: true,
});

export const Name = atom<string>({
  key: 'name',
  default: '',
});

export const NumberInfo = atom<NumberFormProps>({
  key: 'numberInfo',
  default: {
    classNum: 0,
    grade: 0,
    number: 0,
  },
});
