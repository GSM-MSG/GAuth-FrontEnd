export type FilterListType = {
  title: string;
  type: 'ROLE_STUDENT' | 'ROLE_TEACHER' | 'ROLE_GRADUATE';
  gradelist: string[];
  classlist: string[];
};
