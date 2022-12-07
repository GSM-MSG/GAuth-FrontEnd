import React from 'react';
import { Global, css } from '@emotion/react';

const style = css`
  *{
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
    background: #F7F8FC;
  }

  select,
  input,
  button,
  textarea {
    border: 0;
    outline: 0 !important;
  }
`;

export default function GlobalStyle() {
  return <Global styles={style} />;
};
