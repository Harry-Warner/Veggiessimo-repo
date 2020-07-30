import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'playlist-script';
    src: url('/fonts/playlist-script.woff')format("woff");
  }
  @font-face {
    font-family: 'fira-sans';
    src: url('/fonts/fira-sans.woff')format("woff");
  }
  @font-face {
    font-family: 'fira-sans-thin';
    src: url('/fonts/fira-sans-thin.woff')format("woff");
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
