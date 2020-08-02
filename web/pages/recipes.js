import React, { useState } from "react";
import List from "../components/recipelist";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import TitleComponent from "../components/titleComponent.jsx";
import RecipeList from "../styled/postlist";
import SearchFilter from "../components/searchfilter";
import LoadMore from "../components/loadmore";
import MetaTags from "../components/metatags";

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
        imageSrc="https://veggiessimo.com.au/images/smallBites.jpg"
      />
      <TitleComponent title="Recipes" />
      <SearchFilter posts={posts} setSearchPosts={setSearchPosts} />
      <RecipeList>
        {loadSearchPosts &&
          loadSearchPosts.map(
            ({ _id = "", title = "", mainImage, slug = "" }) =>
              slug && (
                <React.Fragment key={_id}>
                  <List
                    type="recipes"
                    title={title}
                    mainImage={mainImage}
                    url={urlFor(mainImage).width(440).url()}
                    slug={slug.current}
                  />
                </React.Fragment>
              )
          )}
      </RecipeList>
      <LoadMore
        searchPosts={searchPosts}
        setLoadSearchPosts={setLoadSearchPosts}
      />
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
        description,
        "mealType": mealType[]->title,
        "mealTypeSub": mealType[]->description,
        "categories": categories[]->title,
        "keyIngredients": keyIngredients[]->title,
        ingredients,
        }|order(publishedAt desc)
    `),
});

export default Recipes;
