import axios, { AxiosError, AxiosResponse } from 'axios';
import TokenManager from './TokenManger';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GAUTH_SERVER_URL,
  withCredentials: true,
});

API.interceptors.request.use(async (config) => {
  const tokenManager = new TokenManager();

  if (
    tokenManager.refreshToken &&
    !tokenManager.checkToken(tokenManager.expiresAt)
  ) {
    await tokenManager.getRefresh(tokenManager.refreshToken);
  }

  config.headers = {
    Authorization: tokenManager.accessToken
      ? `Bearer ${tokenManager.accessToken}`
      : '',
  };

  return config;
});

API.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },

  async (err: AxiosError) => {
    const tokenManager = new TokenManager();

    const resUrl = `${process.env.NEXT_PUBLIC_GAUTH_SERVER_URL}/email`;
    if (
      err.response &&
      err.response.status === 401 &&
      !err.response.request.responseURL.includes(resUrl)
    )
      return tokenManager.getRefresh(tokenManager.refreshToken);
    return Promise.reject(err);
  }
);

export default API;
