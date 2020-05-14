import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'playlist-script';
    /**
     * You don't need to use relative paths for CSS, this will be
     * executed in the browser. The /public folder puts files at
     * the root of the web server, so this file will be at /fonts/<filename>
     */
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
    /**
     * Not sure if you want this on everything, everywhere,
     * but putting it here for now
     */
    font-family: 'playlist-script';
    height: 100vh;
    margin: 0;
  };
`;

export default GlobalStyle;
