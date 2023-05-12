import { createGlobalStyle } from "styled-components";

const GlobalStyle =  createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 1.2rem;
    font-family: 'Inter', sans-serif;
  }

`

export default GlobalStyle;