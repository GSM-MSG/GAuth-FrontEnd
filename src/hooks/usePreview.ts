import mql from '@microlink/mql';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const usePreview = (uri: string) => {
  const [img, setImg] = useState('');

  useEffect(() => {
    const getOpenGraphData = async () => {
      try {
        const { data } = await mql(uri);
        if (!data.image) return;
        setImg(data.image.url);
      } catch (e) {
        toast.error('error');
      }
    };
    getOpenGraphData();
  }, [setImg, uri]);

  return img;
};
