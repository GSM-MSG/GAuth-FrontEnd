import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import Router from 'next/router';
import { accessToken, refreshToken } from './Token';

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,PATCH,DELETE,OPTIONS,REQUEST',
    'Access-Control-Allow-Headers':
      'x-access-token, Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Credentials': true,
  },
});

API.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const access_token: string | null = localStorage.getItem(accessToken);
    const refresh_token: string | null = localStorage.getItem(refreshToken);

    if (config.headers) {
      config.headers['Authorization'] = access_token
        ? `Bearer ${access_token}`
        : '';

      config.headers['refreshToken'] = refresh_token
        ? `Bearer ${refresh_token}`
        : '';
    }
    return config;
  },

  (err: AxiosError) => {
    return Promise.reject(err);
  }
);

API.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },

  async (err: AxiosError) => {
    if (
      err.config.headers &&
      err.response &&
      (err.response.status === 401 || err.response.status === 401)
    ) {
      const refresh_token: string | null =
        localStorage.getItem(refreshToken) ?? '';
      try {
        const { data } = await axios.patch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth`,
          {},
          {
            headers: {
              RefreshToken: `Bearer ${refresh_token}`,
            },
          }
        );

        axios.defaults.headers.common['Authorization'] = `${data.accessToken}`;
        localStorage.setItem(accessToken, data.accessToken);
        localStorage.setItem(refreshToken, data.refreshToken);
        return await API.request(err.config);
      } catch (err) {
        localStorage.removeItem(accessToken);
        localStorage.removeItem(refreshToken);
        Router.replace('/login');
        return Promise.reject(err);
      }
    }
    return Promise.reject(err);
  }
);
