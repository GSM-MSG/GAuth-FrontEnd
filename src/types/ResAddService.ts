export interface AddServiceForm {
  redirectUri: string;
  serviceName: string;
  serviceUri: string;
}

export interface ResAddService extends AddServiceForm {
  clientId: string;
  clientSecret: string;
}
