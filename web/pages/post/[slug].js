import React from "react";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import client from "../../client";
import TitleComponent from "../../components/titleComponent.jsx";
import Footer from "../../components/footer";
import styled from "styled-components";
import Container from "../../styled/container";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Post = (props) => {
  const {
    title = "Missing title",
    mainImage,
    name = "Missing name",
    authorImage,
    ingredients = [],
    body = [],
  } = props;
  return (
    <>
      <TitleComponent title={title} />
      <Container>
        <article>
          <PaintSwipe className="w-full h-12 mt-16 flex bg-cover relative">
            <Title1 className="text-big leading-10">{title}</Title1>
            <div className="flex justify-end items-end absolute bottom-0 right-0">
              {authorImage && (
                <div>
                  <img
                    className="h-4 m-1"
                    src={urlFor(authorImage).url()}
                    alt="self-portrait"
                  />
                </div>
              )}
              <span className="text-xxs m-1">By {name}</span>
            </div>
          </PaintSwipe>
          {mainImage && (
            <div>
              <img
                className="h-48 w-full object-cover object-center"
                src={urlFor(mainImage).width(300).url()}
                alt="food"
              />
            </div>
          )}
          <h2 className="text-lg font-script m-2">Ingredients:</h2>
          <div className="flex mx-4 mb-4 text-xs font-sans italic">
            <BlockContent
              blocks={ingredients}
              imageOptions={{ w: 320, h: 240, fit: "max" }}
              {...client.config()}
            />
          </div>
          <h2 className="m-2 text-lg font-script">Method:</h2>
          <div className="flex mx-4 mb-4 text-xs font-sans">
            <BlockContent
              blocks={body}
              imageOptions={{ w: 320, h: 240, fit: "max" }}
              {...client.config()}
            />
          </div>
        </article>
        <Footer />
      </Container>
    </>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
title,
mainImage,
"name": author->name,
"categories": categories[]->title,
"authorImage": author->image,
ingredients,
body
}`;

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};

const PaintSwipe = styled.div`
  margin-left: -15px;
  background-image: url("/images/brush-stroke2.png");
  background-position: 0% 42%;
`;

const Title1 = styled.h1`
  margin-left: 25px;
  font-family: "playlist-script";
`;

export default Post;
