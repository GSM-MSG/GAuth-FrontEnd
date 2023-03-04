export type ClientInform = {
  email: string;
  name: string;
  grade: number | null;
  classNum: number | null;
  number: number | null;
  profileUrl: string | null;
  clientList: ClientListType[];
};

export interface ClientListType {
  id: number;
  clientId: string;
  serviceName: string;
  serviceUri: string;
}
