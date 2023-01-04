import axios from 'axios';
import { useEffect, useState } from 'react';

export const usePreview = (uri: string) => {
  const [img, setImg] = useState('');
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(process.env.NEXT_PUBLIC_PROXY_URL + uri);
      setImg(data.image);
    })();
  }, [setImg, uri]);

  return img;
};
