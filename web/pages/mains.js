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
import LoadMore from "../components/loadmore";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Mains = (props) => {
  const { posts = [] } = props;
  const [searchPosts, setSearchPosts] = useState([]);
  const [loadSearchPosts, setLoadSearchPosts] = useState(searchPosts);

  return (
    <>
      <TitleComponent title="Mains" />
      <Container>
        <MealTitle title="Mains" />
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

Mains.getInitialProps = async () => ({
  posts: await client.fetch(groq`
      *[_type == "recipePost" && publishedAt < now() && mealType[]._ref == "70c36188-87c5-4b11-a10f-2bd7aa03400d"]{
        title,
        mainImage,
        slug,
        _id,
        "categories": categories[]->title,
        "keyIngredients": keyIngredients[]->title,
        }[0...3]|order(publishedAt desc)
    `),
});

export default Mains;
