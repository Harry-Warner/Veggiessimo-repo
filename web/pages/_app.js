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
import EmailContext from "../lib/emailContext";
import FooterInput from "../lib/footerInputContext";
import { parseCookies } from "../lib/parseCookies";
import Cookie from "js-cookie";

const MyComponent = ({ children, initialClosedValue, initialEmailValue }) => {
  // set modal display state to false and clear the footer input
  const [display, setDisplay] = useState(false);
  const [footerInput, setFooterInput] = useState("");

  // set the state of the users email and users close status to their respective cookies
  const [cookiemail, setCookiemail] = useState(() =>
    initialEmailValue ? JSON.parse(initialEmailValue) : ""
  );
  const [closed, setClosed] = useState(() => JSON.parse(initialClosedValue));

  // change the user cookies to match any state changes during session
  useEffect(() => {
    Cookie.set("closed", JSON.stringify(closed), { expires: 7 });
    Cookie.set("cookiemail", JSON.stringify(cookiemail), { expires: 3650 });
  }, [closed, cookiemail]);

  // set the provider values to monitor state changes
  const emailValue = useMemo(() => ({ cookiemail, setCookiemail }), [
    cookiemail,
    setCookiemail,
  ]);
  const input = useMemo(() => ({ footerInput, setFooterInput }), [
    footerInput,
    setFooterInput,
  ]);
  const value = useMemo(() => ({ closed, setClosed }), [closed, setClosed]);
  const modal = useMemo(() => ({ display, setDisplay }), [display, setDisplay]);

  return (
    <>
      <EmailContext.Provider value={emailValue}>
        <UserContext.Provider value={value}>
          <FooterInput.Provider value={input}>
            <ModalContext.Provider value={modal}>
              {children}
            </ModalContext.Provider>
          </FooterInput.Provider>
        </UserContext.Provider>
      </EmailContext.Provider>
    </>
  );
};

class MyApp extends App {
  render() {
    const {
      Component,
      pageProps,
      router,
      initialClosedValue = false,
      initialEmailValue,
    } = this.props;

    if (router.pathname.startsWith("/sitemap")) {
      return <Component {...pageProps} />;
    }

    return (
      <>
        <Head>
          <link
            href="/fonts/fira-sans.woff"
            type="/font/woff"
            rel="preload"
            as="font"
            crossorigin="anonymous"
          />
          <link
            href="/fonts/fira-sans-thin.woff"
            type="/font/woff"
            rel="preload"
            as="font"
            crossorigin="anonymous"
          />
          <link
            href="/fonts/playlist-script.woff"
            type="/font/woff"
            rel="preload"
            as="font"
            crossorigin="anonymous"
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
        <MyComponent
          initialClosedValue={initialClosedValue}
          initialEmailValue={initialEmailValue}
        >
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

  return {
    ...appProps,
    initialClosedValue: cookies.closed,
    initialEmailValue: cookies.cookiemail,
  };
};

export default MyApp;
