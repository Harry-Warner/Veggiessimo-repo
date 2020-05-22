import React from "react";
import Link from "next/link";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import styled from "styled-components";
import TitleComponent from "../components/titleComponent.jsx";
import RecipeList from "../styled/recipeslist";
import RecipeTypes from "../components/recipetypes";
import Footer from "../components/footer";
import Container from "../styled/container";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Recipes = (props) => {
  const { posts = [] } = props;

  return (
    <>
      <TitleComponent title="Recipes" />
      <Container>
        <h1 className="mt-4 md:mt-6 lg:mt-16 text-start text-vbig md:text-huge w-full px-12 font-script bg-greenT">
          Recipes!
        </h1>
        <RecipeTypes />
        <h2 className="w-full md:w-2/3 lg:w-1/2 h-12 md:h-16 lg:h-20 mx-auto text-center my-6 bg-lightBlueT flex justify-center items-center text-big md:text-huge font-script">
          Most Recent Recipes!
        </h2>
        <RecipeList>
          {posts.map(
            ({ _id, title = "", mainImage, slug = "", _updatedAt = "" }) =>
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
                      <div className="flex justify-between">
                        <p className="font-sans self-center text-black uppercase mx-10 my-2 text-sm md:text-lg lg:text-xxl">
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
        <Footer />
      </Container>
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
