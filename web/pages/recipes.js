import React, { useState } from "react";
import List from "../components/recipelist";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import TitleComponent from "../components/titleComponent.jsx";
import RecipeList from "../styled/postlist";
import Footer from "../components/footer";
import Container from "../styled/container";
import SearchFilter from "../components/searchfilter";
import LoadMore from "../components/loadmore";
import MetaTags from "../components/metatags";
import MealTitle from "../components/mealtitle";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Recipes = (props) => {
  const { posts = [] } = props;
  const [searchPosts, setSearchPosts] = useState([]);
  const [loadSearchPosts, setLoadSearchPosts] = useState(searchPosts);

  return (
    <>
      <MetaTags
        description="Delicious recipes"
        type="object"
        title="Recipes | Veggiessimo"
        url="recipes"
        imageSrc="https://veggiessimo.com.au/images/mains.png"
      />
      <TitleComponent title="Recipes" />
      <Container>
        <MealTitle
          title={`${
            searchPosts.length === 0 || searchPosts.length === posts.length
              ? "Recipes"
              : searchPosts[0].mealType
          }`}
          description={`${
            searchPosts.length === 0 || searchPosts.length === posts.length
              ? "Checkout out our recipes, from Breakfasts to start your day right, to sauces that can make anything taste good!"
              : searchPosts[0].description
          }`}
        />
        <SearchFilter posts={posts} setSearchPosts={setSearchPosts} />
        <RecipeList>
          {loadSearchPosts &&
            loadSearchPosts.map(
              ({ _id, title = "", mainImage, slug = "" }) =>
                slug && (
                  <List
                    type="recipes"
                    _id={_id}
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
        "mealType": mealType[]->title,
        "description": mealType[]->description,
        "categories": categories[]->title,
        "keyIngredients": keyIngredients[]->title,
        ingredients,
        }|order(publishedAt desc)
    `),
});

export default Recipes;
