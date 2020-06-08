import React, { useState } from "react";
import List from "../components/recipelist";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import styled from "styled-components";
import TitleComponent from "../components/titleComponent.jsx";
import RecipeList from "../styled/postlist";
import RecipeTypes from "../components/recipetypes";
import Footer from "../components/footer";
import Container from "../styled/container";
import SearchFilter from "../components/searchfilter";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Recipes = (props) => {
  const { posts = [] } = props;
  const [searchPosts, setSearchPosts] = useState([]);

  return (
    <>
      <TitleComponent title="Recipes" />
      <Container>
        <RecipeTypes />
        <StyledTitle className="w-9/12 md:w-7/12 lg:w-6/12 md:h-32 lg:h-32 mx-auto text-center my-6 flex justify-center items-center">
          <h1 className="text-big md:text-huge font-script">Recent Recipes!</h1>
        </StyledTitle>
        <SearchFilter posts={posts} setSearchPosts={setSearchPosts} />
        <RecipeList>
          {searchPosts &&
            searchPosts.map(
              ({ _id, title = "", mainImage, slug = "" }) =>
                slug && (
                  <List
                    id={_id}
                    title={title}
                    mainImage={mainImage}
                    url={urlFor(mainImage).url()}
                    slug={slug.current}
                  />
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
      *[_type == "recipePost" && publishedAt < now()]{
        title,
        mainImage,
        slug,
        _id,
        "categories": categories[]->title,
        }|order(publishedAt desc)
    `),
});

const StyledTitle = styled.div`
  background-image: url("images/mealbrush640.png");
  background-size: cover;
  background-position: center;

  @media (max-width: 640px) {
    height: 22vw;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    background-image: url("images/mealbrush768.png");
  }
  @media (min-width: 1024px) {
    background-image: url("images/mealbrush1024.png");
  }
`;

export default Recipes;
