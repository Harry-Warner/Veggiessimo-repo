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
    margin: 0;

  background-image: url("../../images/cwubg640.png");

  @media (min-width: 768px) {
    background-image: url("../../images/cwubg768.png");
  }
  @media (min-width: 1024px) {
    background-image: url("../../images/cwubg1024.png");
  }
  };
`;

export default GlobalStyle;
