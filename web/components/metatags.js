import React from "react";
import Head from "next/head";

const MetaTags = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta property="og:type" content={props.type} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      {props.imageSrc ? (
        <meta property="og:image" content={props.imageSrc} />
      ) : null}
      <meta
        property="og:image"
        content="https://veggiessimo.com.au/images/logo.png"
      />
      <meta
        property="og:url"
        content={`https://veggiessimo.com.au/${props.url}`}
      />
      <meta property="og:site_name" content="Veggiessimo" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      {props.imageSrc ? (
        <meta name="twitter:image" content={props.imageSrc} />
      ) : (
        <meta
          name="twitter:image"
          content="https://veggiessimo.com.au/images/logo.png"
        />
      )}
      {props.deIndex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      <link rel="canonical" href={`https://veggiessimo.com.au/${props.url}`} />
      {/* <meta name="twitter:site" content="@Veggiessimo" />
      <meta name="twitter:creator" content="@Veggiessimo" /> */}
    </Head>
  );
};

export default MetaTags;
