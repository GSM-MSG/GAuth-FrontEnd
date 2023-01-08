import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import Router, { useRouter } from 'next/router';
import { accessToken, expiredAt, refreshToken } from './Token';

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_GAUTH_SERVER_URL!,
    'Access-Control-Allow-Methods': 'GET,PUT,POST,PATCH,DELETE,OPTIONS,REQUEST',
    'Access-Control-Allow-Headers':
      'x-access-token, Origin, X-Requested-With, Content-Type, Accept',
  },
});

const refreshApi = async (err: AxiosError | AxiosRequestConfig) => {
  const refresh_token = localStorage.getItem(refreshToken);

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

    if (err instanceof AxiosError) return await API.request(err.config);
    return data.accessToken;
  } catch (e) {
    localStorage.removeItem(accessToken);
    localStorage.removeItem(refreshToken);
    localStorage.removeItem(expiredAt);

    Router.replace('/login');
    return Promise.reject(err);
  }
};

API.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    let access_token = localStorage.getItem(accessToken);
    const token_expiredAt = localStorage.getItem(expiredAt) ?? '';

    if (
      config.headers &&
      Router.pathname !== '/login' &&
      Router.pathname !== '/signUp'
    ) {
      if (
        !access_token ||
        new Date(token_expiredAt).getTime() - new Date().getTime() <= 30000
      ) {
        access_token = await refreshApi(config);
      }
      config.headers['Authorization'] = `Bearer ${access_token}`;
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
    if (err.response && err.response.status === 401) return refreshApi(err);
    return Promise.reject(err);
  }
);
