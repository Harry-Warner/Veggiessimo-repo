import React from "react";
import App from "next/app";
import "../styled/tailwind.css";
import GlobalStyle from "../styled/global";
import Head from "next/head";
import Header from "../components/header";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&display=swap"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="favicon/safari-pinned-tab.svg"
            color="#5984c4"
          />
          <meta name="msapplication-TileColor" content="#5984c4" />
          <meta name="theme-color" content="#d9e892" />
        </Head>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
