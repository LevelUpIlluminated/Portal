import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #000;
    color: #00ff00;
    font-family: 'Courier New', Courier, monospace;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
