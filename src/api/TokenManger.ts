import axios from 'axios';
import Router from 'next/router';
import { accessToken, expiredAt, refreshToken } from '../lib/Token';
import TokenType from '../types/TokenType';

class TokenManager {
  private _accessToken: string | null = null;
  private _refreshToken: string | null = null;
  private _expiresAt: string | null = null;

  constructor() {
    this.initToken();
  }

  initToken() {
    if (typeof window === 'undefined') return;
    this._accessToken = localStorage.getItem(accessToken);
    this._refreshToken = localStorage.getItem(refreshToken);
    this._expiresAt = localStorage.getItem(expiredAt);
  }

  checkToken(expiredString: string | null) {
    if (!expiredString) return;
    return new Date(expiredString).getTime() - new Date().getTime() >= 30000;
  }

  async getRefresh(refresh: string | null) {
    if (this.skipUrl()) return;
    if (!refresh) return Router.push('/login');

    try {
      const { data } = await axios.patch(
        `${process.env.NEXT_PUBLIC_GAUTH_SERVER_URL}/auth`,
        {},
        {
          headers: {
            RefreshToken: `Bearer ${this._refreshToken}`,
          },
        }
      );
      this.setToken(data);
      return;
    } catch (e) {
      localStorage.removeItem(accessToken);
      localStorage.removeItem(refreshToken);
      localStorage.removeItem(expiredAt);

      return Router.push('/login');
    }
  }

  skipUrl() {
    const skipUrl = ['/login', '/signUp', '/newpsw'];

    return skipUrl.includes(Router.route);
  }

  setToken(tokens: TokenType) {
    this._accessToken = tokens.accessToken;
    this._refreshToken = tokens.refreshToken;
    this._expiresAt = tokens.expiresAt;

    localStorage.setItem(accessToken, tokens.accessToken);
    localStorage.setItem(refreshToken, tokens.refreshToken);
    localStorage.setItem(expiredAt, tokens.expiresAt);
  }

  get accessToken() {
    return this._accessToken;
  }

  get refreshToken() {
    return this._refreshToken;
  }

  get expiresAt() {
    return this._expiresAt;
  }
}

export default TokenManager;
