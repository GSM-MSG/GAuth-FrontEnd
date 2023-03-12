import {
  useState,
  useEffect,
  ReactElement,
  MouseEvent,
  cloneElement,
} from 'react';
import ReactDOM from 'react-dom';
import { Positioner } from './style';

type Props = {
  children: ReactElement;
  onClose: () => void;
};

const Portal = ({ children, onClose }: Props) => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.cssText = `
      overflow: hidden
    `;

    return () => {
      document.body.style.cssText = '';
    };
  }, []);

  if (typeof window === 'undefined') return null;

  if (!isMounted) return null;

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <Positioner onClick={onClose}>
      {cloneElement(children, { onClick })}
    </Positioner>,
    document.getElementById('portal')!
  );
};

export default Portal;
