import React, { useState } from "react";
import List from "../components/recipelist";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import TitleComponent from "../components/titleComponent.jsx";
import RecipeList from "../styled/postlist";
import RecipeTypes from "../components/recipetypes";
import Footer from "../components/footer";
import Container from "../styled/container";
import SearchFilter from "../components/searchfilter";
import MealTitle from "../components/mealtitle";
import LoadMore from "../components/loadmore";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Recipes = (props) => {
  const { posts = [] } = props;
  const [searchPosts, setSearchPosts] = useState([]);
  const [loadSearchPosts, setLoadSearchPosts] = useState(searchPosts);

  return (
    <>
      <TitleComponent title="Recipes" />
      <Container>
        <RecipeTypes />
        <MealTitle title="Recent Recipes" />
        <SearchFilter posts={posts} setSearchPosts={setSearchPosts} />
        <RecipeList>
          {loadSearchPosts &&
            loadSearchPosts.map(
              ({ _id, title = "", mainImage, slug = "" }) =>
                slug && (
                  <List
                    type="recipes"
                    id={_id}
                    title={title}
                    mainImage={mainImage}
                    url={urlFor(mainImage).url()}
                    slug={slug.current}
                  />
                )
            )}
        </RecipeList>
        <LoadMore
          searchPosts={searchPosts}
          setLoadSearchPosts={setLoadSearchPosts}
        />
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

export default Recipes;
