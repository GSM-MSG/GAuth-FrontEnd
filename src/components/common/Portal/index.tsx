import { useState, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Positioner } from './style';

type PortalProps = {
  children: ReactNode;
  onClose: () => void;
};

const Portal = ({ children, onClose }: PortalProps) => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (typeof window === 'undefined') return null;

  if (!isMounted) return null;

  return ReactDOM.createPortal(
    <Positioner onClick={onClose}>{children}</Positioner>,
    document.getElementById('portal')!
  );
};

export default Portal;
