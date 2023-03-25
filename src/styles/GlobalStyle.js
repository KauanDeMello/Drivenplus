import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

    body {
    margin: 0;
    padding: 0;
    line-height: 1;
    background-color: black;
      
  }

  @media (max-width: 600px) {
    html {
      font-size: 50%;
    }
  }

`

export default GlobalStyle 