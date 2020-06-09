import React, { useState } from "react";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import TitleComponent from "../components/titleComponent.jsx";
import RecipeList from "../styled/postlist";
import Footer from "../components/footer";
import Container from "../styled/container";
import SearchFilter from "../components/searchfilter";
import MealTitle from "../components/mealtitle";
import List from "../components/recipelist";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Mains = (props) => {
  const { posts = [] } = props;
  const [searchPosts, setSearchPosts] = useState([]);

  return (
    <>
      <TitleComponent title="Mains" />
      <Container>
        <MealTitle title="Mains" />
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

Mains.getInitialProps = async () => ({
  posts: await client.fetch(groq`
      *[_type == "recipePost" && publishedAt < now() && mealType[]._ref == "70c36188-87c5-4b11-a10f-2bd7aa03400d"]{
        title,
        mainImage,
        slug,
        _id,
        "categories": categories[]->title,
        "keyIngredients": keyIngredients[]->title,
        }|order(publishedAt desc)
    `),
});

export default Mains;
