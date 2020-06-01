import React from "react";
import Link from "next/link";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import client from "../../client";
import TitleComponent from "../../components/titleComponent.jsx";
import Footer from "../../components/footer";
import styled from "styled-components";
import Container from "../../styled/container";
import RecipeList from "../../styled/postlist";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Post = (props) => {
  const { post = [], recipes = [] } = props;
  return (
    <>
      <TitleComponent title={post.title} />
      <Container>
        <article>
          <PaintSwipe className="w-full h-12 mt-16 flex bg-cover relative">
            <Title1 className="text-big leading-10">{post.title}</Title1>
            <div className="flex justify-end items-end absolute bottom-0 right-0">
              {post.authorImage && (
                <div>
                  <img
                    className="h-4 m-1"
                    src={urlFor(post.authorImage).url()}
                    alt="self-portrait"
                  />
                </div>
              )}
              <span className="text-xxs m-1">By {post.name}</span>
            </div>
          </PaintSwipe>
          {post.mainImage && (
            <div>
              <img
                className="h-48 w-full object-cover object-center"
                src={urlFor(post.mainImage).width(300).url()}
                alt="food"
              />
            </div>
          )}
          <h2 className="text-lg font-script m-2">Ingredients:</h2>
          <div className="flex mx-4 mb-4 text-xs font-sans italic">
            <BlockContent
              blocks={post.ingredients}
              imageOptions={{ w: 320, h: 240, fit: "max" }}
              {...client.config()}
            />
          </div>
          <h2 className="m-2 text-lg font-script">Method:</h2>
          <div className="flex mx-4 mb-4 text-xs font-sans">
            <BlockContent
              blocks={post.body}
              imageOptions={{ w: 320, h: 240, fit: "max" }}
              {...client.config()}
            />
          </div>
        </article>
        <RecipeList className="hidden">
          {recipes.map(
            ({ _id, title = "", mainImage, slug = "" }) =>
              slug && (
                <li key={_id}>
                  <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                    <a>
                      {mainImage && (
                        <img
                          className="h-48 lg:h-64 w-full object-cover object-center"
                          src={urlFor(mainImage).url()}
                          alt="Food"
                        />
                      )}
                      <div className="flex justify-center">
                        <p className="font-sans self-center text-black uppercase mx-10 my-2 text-sm md:text-lg lg:text-xxl">
                          {title}
                          <span className="vegetarianicon"> &#9419;</span>
                        </p>
                      </div>
                    </a>
                  </Link>
                  <StyledLine />
                </li>
              )
          )}
        </RecipeList>
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
  return {
    post: await client.fetch(query, { slug }),
    recipes: await client.fetch(groq`
    *[_type == "post" && publishedAt < now() && categories[]._ref == "327f026c-2dcc-46da-b58f-d876c2be0005"]|order(publishedAt desc){
      title,
      mainImage,
      slug,
      _id,
      "categories": categories[]->title,
      }[0...4]
  `),
  };
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

const StyledLine = styled.hr`
  width: 50%;
  margin: 20px auto;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
`;

export default Post;
