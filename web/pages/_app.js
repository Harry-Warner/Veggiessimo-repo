import React from "react";
import App from "next/app";
import "../styled/tailwind.css";
import styled from "styled-components";
import GlobalStyle from "../styled/global";
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import cwubg640 from "../images/cwubg640.png";
import cwubg768 from "../images/cwubg768.png";
import cwubg1024 from "../images/cwubg1024.png";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="http://static.sasongsmat.nu/fonts/vegetarian.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&display=swap"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="favicon-package/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicon-package/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicon-package/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4a89e8" />
          <meta name="msapplication-TileColor" content="#4a89e8" />
          <meta name="theme-color" content="#d9e892" />
        </Head>
        <GlobalStyle />
        <StyledContainer className="w-full relative min-h-screen sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg mx-auto pb-32 md:pb-56">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </StyledContainer>
      </>
    );
  }
}

const StyledContainer = styled.div`
  background-image: url(${cwubg640});

  @media (min-width: 768px) {
    background-image: url(${cwubg768});
  }
  @media (min-width: 1024px) {
    background-image: url(${cwubg1024});
  }
`;

export default MyApp;
