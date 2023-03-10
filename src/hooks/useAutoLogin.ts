import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import TokenManager from '../api/TokenManger';

export const useAutoLogin = (goMain = true) => {
  const [checkAuto, setAuto] = useState<boolean | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const tokenManager = new TokenManager();

      const refresh = await tokenManager.getRefresh({
        refresh: tokenManager.refreshToken,
        push: true,
      });

      if (!refresh) {
        tokenManager.deleteToken();
        return setAuto(false);
      }
      return goMain ? router.push('/') : setAuto(true);
    })();
  }, []);

  return { checkAuto };
};
