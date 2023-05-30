import { FilterListType } from '../types/FilterType';

export const FilterList: FilterListType[] = [
  {
    title: '재학생',
    type: 'ROLE_STUDENT',
    gradelist: ['1', '2', '3'],
    classlist: ['1', '2', '3', '4'],
  },
  { title: '선생님', type: 'ROLE_TEACHER', gradelist: [], classlist: [] },
  { title: '졸업생', type: 'ROLE_GRADUATE', gradelist: [], classlist: [] },
];
