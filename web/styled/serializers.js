import React from "react";

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
      console.log(props);
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
    em: ({ children }) => {
      return <span className="italic">{children}</span>;
    },
    s: ({ children }) => {
      return (
        <span className="font-script text-xl md:text-xxxl lg:text-big">
          {children}
        </span>
      );
    },
    // internalLink: ({ mark, children }) => {
    //   const { type, slug = {}, url } = mark;
    //   const href = url ? url : `/post/${type}/${slug.current}`;
    //   return <a href={href}>{children}</a>;
    // },
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
