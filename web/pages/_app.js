import React from "react";
import App from "next/app";
import "../styled/tailwind.css";
import GlobalStyle from "../styled/global";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
