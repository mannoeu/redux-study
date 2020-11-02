import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    width: 100%;
    min-height: 100vh;
  }
  #root {
    padding: 10px 0;
    background: #1c163a;
  }

`;

export default GlobalStyle;
