import React from "react";
import Link from "next/link";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import styled from "styled-components";
import TitleComponent from "../components/titleComponent.jsx";
import RecipeList from "../styled/recipeslist";
import RecipeTypes from "../components/recipetypes";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Recipes = (props) => {
  const { posts = [] } = props;

  return (
    <>
      <TitleComponent title="Recipes" />
      <h1 className="pt-10 md:mt-16 text-center w-full">Recipes!!!</h1>
      <RecipeTypes />
      <RecipeList>
        {posts.map(
          ({ _id, title = "", mainImage, slug = "", _updatedAt = "" }) =>
            slug && (
              <li key={_id}>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  <a>
                    {mainImage && (
                      <img
                        className="h-48 w-full object-cover object-center"
                        src={urlFor(mainImage).url()}
                        alt="Food"
                      />
                    )}
                    <div className="flex justify-between">
                      <p className="font-sans self-center text-black uppercase mx-10 my-2 text-sm">
                        {title}
                        <span className="vegetarianicon"> &#9419;</span>
                      </p>
                      <div className="font-sans self-center text-black mx-10 my-2 text-xxs">
                        {"  "}({new Date(_updatedAt).toDateString()})
                      </div>
                    </div>
                  </a>
                </Link>
                <StyledLine />
              </li>
            )
        )}
      </RecipeList>
    </>
  );
};

Recipes.getInitialProps = async () => ({
  posts: await client.fetch(groq`
      *[_type == "post" && publishedAt < now() && categories[]._ref == "327f026c-2dcc-46da-b58f-d876c2be0005"]|order(publishedAt desc)
    `),
});

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

export default Recipes;
