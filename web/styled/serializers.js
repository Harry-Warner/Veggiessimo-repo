import React from "react";
import Link from "next/link";

const Styler = (props) => {
  let css;
  switch (props) {
    case "h1":
      css = "text-xxl md:text-big lg:text-vbig";
      break;
    case "h2":
      css = "text-xl md:text-xxxl lg:text-big";
      break;
    case "h3":
      css = "font-sans md:font-script text-lg md:text-xxxl lg:text-big";
      break;
    default:
      css = "text-sm md:text-lg lg:text-xl";
  }
  return css;
};

// const marks = `
//   markDefs[]{
//     _type == "internalLink" => {
//       _key,
//       "slug": @.reference->slug,
//       "type": @.reference->_type,
//       "url": "https://veggiessimo.com.au/post/" + @.reference->_type + "/" + @.reference->slug.current
//     }
//   }`;

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
  },
  marks: {
    s: ({ children }) => {
      return (
        <span className="font-script text-xl md:text-xxxl lg:text-big">
          {children}
        </span>
      );
    },
    postLink: ({ mark, children }) => {
      const { type, slug = {} } = mark;
      console.log(slug);
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
