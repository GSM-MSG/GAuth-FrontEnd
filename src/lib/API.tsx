import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export const API = axios.create({
  baseURL: 'http://10.120.74.223:8080',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers':
      'x-access-token, Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Alllow-Credentials': true,
  },
});

API.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    if (config.headers) {
      try {
        const { data } = await API.patch('/auth', {
          headers: { RefreshToken: localStorage.getItem('Gauth-refreshToken') },
        });

        config.headers['Authorization'] = 'Bearer ' + data.accessToken;
        localStorage.setItem('Gauth-accessToken', data.accessToken);
        localStorage.setItem('Gauth-refreshToken', data.refreshToken);
      } catch (error: any) {
        if (
          error.message === 'Request failed with status code 401' ||
          error.message === 'Request failed with status code 404'
        ) {
          localStorage.removeItem('Gauth-accessToken');
          localStorage.removeItem('Gauth-refreshToken');
          window.location.replace('/login');
        }
      }
    }
    return config;
  },
  async (error: AxiosError) => {
    return Promise.reject(error);
  }
);
