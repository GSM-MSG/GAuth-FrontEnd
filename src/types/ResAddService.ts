export interface NewServiceForm {
  redirectUri: string;
  serviceName: string;
  serviceUri: string;
  serviceScope: 'PUBLIC' | 'PRIVATE';
  serviceImgUrl: string;
}

export interface ResNewService extends NewServiceForm {
  clientId: string;
  clientSecret: string;
}
