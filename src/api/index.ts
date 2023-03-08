import axios, { AxiosError, AxiosResponse } from 'axios';

import TokenManager from './TokenManger';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GAUTH_SERVER_URL,
  withCredentials: true,
});

API.interceptors.request.use(async (config) => {
  const tokenManager = new TokenManager();

  if (!tokenManager.checkToken(tokenManager.expiresAt)) {
    await tokenManager.getRefresh(tokenManager.refreshToken);
  }

  config.headers['Authorization'] = tokenManager.accessToken
    ? `Bearer ${tokenManager.accessToken}`
    : undefined;

  return config;
});

API.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },

  async (err: AxiosError) => {
    const tokenManager = new TokenManager();

    if (err.response && err.response.status === 401)
      return tokenManager.getRefresh(tokenManager.refreshToken);
    return Promise.reject(err);
  }
);

export default API;
