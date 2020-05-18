import React from "react";
import App from "next/app";
import "../styled/tailwind.css";
import GlobalStyle from "../styled/global";
import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";

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
          <meta name="msapplication-TileColor" content="#4a89e8"></meta>
          <meta name="theme-color" content="#d9e892"></meta>
        </Head>
        <GlobalStyle />
        <div className="w-full relative min-h-screen sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg mx-auto pb-32">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </>
    );
  }
}

export default MyApp;
