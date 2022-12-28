import React from 'react';
import { Global, css } from '@emotion/react';
import 'react-toastify/dist/ReactToastify.css';

const style = css`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
    background: #f7f8fc;
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
