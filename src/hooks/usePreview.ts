import mql from '@microlink/mql';
import { useEffect, useState } from 'react';

export const usePreview = (uri: string) => {
  const [img, setImg] = useState('');
  useEffect(() => {
    const getOpenGraphData = async () => {
      try {
        const { data } = await mql(uri);
        if (!data.image) return;
        setImg(data.image.url);
      } catch (e) {
        return;
      }
    };
    getOpenGraphData();
  }, [setImg, uri]);

  return img;
};
