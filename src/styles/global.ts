import { createGlobalStyle } from "styled-components";

import githubBackground from "../assets/background.svg";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root {
    max-width: 1060px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  body {
    background: #f7f5f6 url(${githubBackground}) no-repeat 69% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px  Roboto, sans-serif;
  }

  button {
    cursor: pointer
  }


`;
