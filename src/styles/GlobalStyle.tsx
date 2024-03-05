import React from 'react';
import { Global, css } from '@emotion/react';
import 'react-toastify/dist/ReactToastify.css';

const style = css`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    font-display: swap;
    src: url('/font/Pretendard-Black.otf') format('opentype');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    font-display: swap;
    src: url('/font/Pretendard-ExtraBold.otf') format('opentype');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: swap;
    src: url('/font/Pretendard-Bold.otf') format('opentype');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-display: swap;
    src: url('/font/Pretendard-SemiBold.otf') format('opentype');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-display: swap;
    src: url('/font/Pretendard-Medium.otf') format('opentype');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src: url('/font/Pretendard-Regular.otf') format('opentype');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-display: swap;
    src: url('/font/Pretendard-Light.otf') format('opentype');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 200;
    font-display: swap;
    src: url('/font/Pretendard-ExtraLight.otf') format('opentype');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    font-display: swap;
    src: url('/font/Pretendard-Thin.otf') format('opentype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }
  body {
    font-family: 'Pretendard', sans-serif;
    background: #fafafa;
  }

  select,
  input,
  button,
  textarea {
    border: 0;
    outline: 0 !important;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export default function GlobalStyle() {
  return <Global styles={style} />;
}
