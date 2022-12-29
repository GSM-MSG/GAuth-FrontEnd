import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import Router from 'next/router';
import { accessToken, expiredAt, refreshToken } from './Token';

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
    const token_expiredAt: string = localStorage.getItem(expiredAt) ?? '';

    if (config.headers) {
      config.headers['Authorization'] =
        access_token &&
        new Date(token_expiredAt).getTime() - new Date().getTime() > 30000
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
    if (err.config.headers && err.response && err.response.status === 401) {
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

        localStorage.setItem(accessToken, data.accessToken);
        localStorage.setItem(refreshToken, data.refreshToken);
        localStorage.setItem(expiredAt, data.expiresAt);
        return await API.request(err.config);
      } catch (err) {
        localStorage.removeItem(accessToken);
        localStorage.removeItem(refreshToken);
        localStorage.removeItem(expiredAt);
        Router.replace('/login');
        return Promise.reject(err);
      }
    }
    return Promise.reject(err);
  }
);
