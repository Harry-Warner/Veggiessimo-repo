import React, { useState, useMemo, useEffect } from "react";
import App from "next/app";
import "../styled/tailwind.css";
import GlobalStyle from "../styled/global";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Container from "../styled/container";
import Modal from "../components/modal";
import UserContext from "../lib/userContext";
import ModalContext from "../lib/modalContext";
import { parseCookies } from "../lib/parseCookies";
import Cookie from "js-cookie";

const MyComponent = ({ children, initialSubscribedValue }) => {
  const [display, setDisplay] = useState(false);
  const [subscribed, setSubscribed] = useState(() =>
    JSON.parse(initialSubscribedValue)
  );

  useEffect(() => {
    Cookie.set("subscribed", JSON.stringify(subscribed));
  }, [subscribed]);

  const value = useMemo(() => ({ subscribed, setSubscribed }), [
    subscribed,
    setSubscribed,
  ]);
  const modal = useMemo(() => ({ display, setDisplay }), [display, setDisplay]);

  return (
    <>
      <UserContext.Provider value={value}>
        <ModalContext.Provider value={modal}>{children}</ModalContext.Provider>
      </UserContext.Provider>
    </>
  );
};

class MyApp extends App {
  render() {
    const { Component, pageProps, initialSubscribedValue = false } = this.props;

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
        <MyComponent initialSubscribedValue={initialSubscribedValue}>
          <Header />
          <Modal />
          <Container>
            <Component {...pageProps} />
            <Footer />
          </Container>
        </MyComponent>
      </>
    );
  }
}

MyApp.getInitialProps = async (appContext) => {
  const request = appContext.ctx.req;
  const cookies = parseCookies(request);
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, initialSubscribedValue: cookies.subscribed };
};

export default MyApp;
