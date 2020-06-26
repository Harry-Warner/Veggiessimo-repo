import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'playlist-script';
    src: url('/fonts/playlist-script.ttf');
  }
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    outline: none;
  };

  body {
    height: 100vh;
    overflow-x: hidden;
    margin: 0;
  };
`;

export default GlobalStyle;
