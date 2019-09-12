import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    font-family: "Helvetica Neue", Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.42;
    -webkit-font-smoothing: antialiased;
    font-weight: 300;
    background: #f5f5f5;
    color: #777;
  }
  
  ul {
    margin: 0;
    padding: 0;
    
  }

  ul>li {
      list-style: none;
    }

  * {
    box-sizing: border-box;
  }
`;
