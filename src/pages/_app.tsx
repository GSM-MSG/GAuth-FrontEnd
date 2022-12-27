import type { AppProps } from 'next/app';
import { Slide, toast, ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer
        position={toast.POSITION.TOP_RIGHT}
        transition={Slide}
        autoClose={1500}
      />
    </RecoilRoot>
  );
}
export default MyApp;
