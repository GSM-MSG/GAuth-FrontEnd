import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Slide, toast, ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>GAuth</title>
      </Head>
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
        <ToastContainer
          position={toast.POSITION.TOP_RIGHT}
          transition={Slide}
          autoClose={1500}
        />
      </RecoilRoot>
    </>
  );
}
export default MyApp;
