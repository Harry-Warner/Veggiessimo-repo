import React from "react";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

const Styler = (props) => {
  let css;
  switch (props) {
    case "h1":
      css = "my-4 text-xl md:text-xxxl lg:text-big";
      break;
    case "h2":
      css = "mt-4 text-lg md:text-xl lg:text-xxl";
      break;
    case "h3":
      css = "my-2 font-sans md:font-script text-lg md:text-xxxl lg:text-big";
      break;
    default:
      css = "mb-4 text-sm md:text-lg lg:text-xl";
  }
  return css;
};

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const serializers = {
  types: {
    block(props) {
      return (
        <>
          <div
            className={`${Styler(props.node.style)} ${
              props.node.style === "blockquote" ? "hidden" : "block"
            }`}
          >
            {props.children}
          </div>
          <blockquote
            className={`${
              props.node.style === "blockquote" ? "block" : "hidden"
            } text-base md:text-xl lg:text-xxl`}
          >
            {props.children}
          </blockquote>
        </>
      );
    },
    image(props) {
      return (
        <img
          src={urlFor(props.node)}
          alt={props.node.altText}
          className="mx-auto mb-4 w-full h-48 md:h-84 lg:h-64 object-center object-cover"
        />
      );
    },
  },
  listItem: (props) => {
    return <li className="text-sm md:text-lg lg:text-xl">{props.children}</li>;
  },
  marks: {
    s: ({ children }) => {
      return <span className={`${Styler("h2")} font-script`}>{children}</span>;
    },
    postLink: ({ mark, children }) => {
      const { type, slug = {} } = mark;
      // remove the "Post" from the post type
      const post = type.split("").slice(0, -4);
      // change recipe to recipes
      if (post.length === 6) {
        post.push("s");
      }
      const postType = post.join().replace(/,/g, "");
      const href = `/post/${postType}/${slug.current}`;
      return (
        <Link href={`/post/${postType}/[slug]`} as={href}>
          <a>{children}</a>
        </Link>
      );
    },
    internalLink: ({ mark, children }) => {
      const { singlePage = "" } = mark;
      console.log(singlePage);
      return (
        <Link href={`/${singlePage}`}>
          <a>{children}</a>
        </Link>
      );
    },
    externalLink: ({ mark, children }) => {
      const { blank, href } = mark;
      return blank ? (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      );
    },
  },
};

export default serializers;
