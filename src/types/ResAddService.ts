export interface NewServiceForm {
  redirectUri: string;
  serviceName: string;
  serviceUri: string;
  serviceScope: string;
}

export interface ResNewService extends NewServiceForm {
  clientId: string;
  clientSecret: string;
}
