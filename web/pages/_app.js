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
          <title>Veggiessimo</title>
          <link
            rel="stylesheet"
            href="http://static.sasongsmat.nu/fonts/vegetarian.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyle />
        <div className="w-full relative min-h-screen sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg mx-auto">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </>
    );
  }
}

export default MyApp;
