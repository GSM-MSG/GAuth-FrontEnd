import { useState, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Positioner } from './style';

type Props = {
  children: ReactNode;
  onClose: () => void;
};

const Portal = ({ children, onClose }: Props) => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (typeof window === 'undefined') return null;

  if (!isMounted) return null;

  document.body.style.cssText = `
    overflow: hidden
  `;

  return ReactDOM.createPortal(
    <Positioner onClick={onClose}>{children}</Positioner>,
    document.getElementById('portal')!
  );
};

export default Portal;
