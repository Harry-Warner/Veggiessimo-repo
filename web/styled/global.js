import { createGlobalStyle } from "styled-components";
import cwubg640 from "../images/cwubg640.png";
import cwubg768 from "../images/cwubg768.png";
import cwubg1024 from "../images/cwubg1024.png";

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

  background-image: url(${cwubg640});

  @media (min-width: 768px) {
    background-image: url(${cwubg768});
  }
  @media (min-width: 1024px) {
    background-image: url(${cwubg1024});
  }
  };
`;

export default GlobalStyle;
