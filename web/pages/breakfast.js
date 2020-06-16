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
import MealTitle from "../components/mealtitle";
import LoadMore from "../components/loadmore";
import MetaTags from "../components/metatags";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Breakfast = (props) => {
  const { posts = [] } = props;
  const [searchPosts, setSearchPosts] = useState([]);
  const [loadSearchPosts, setLoadSearchPosts] = useState(searchPosts);

  return (
    <>
      <MetaTags
        description="Kickstart your mornings with a bang and dig into our amazing breakfast recipes! Whether it's healthy delicious smoothies, the classic banana pancakes or the aussie favourite avacado recipes, we've got you covered!"
        type="object"
        title="Breakfast | Veggiessimo"
        url="breakfast"
        imageSrc="https://veggiessimo.com.au/images/breakfast.png"
      />
      <TitleComponent title="Breakfast" />
      <Container>
        <MealTitle title="Breakfast" />
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

Breakfast.getInitialProps = async () => ({
  posts: await client.fetch(groq`
      *[_type == "recipePost" && publishedAt < now() && mealType[]._ref == "f27dbebe-f156-4a62-b259-f61123299697"]{
        title,
        mainImage,
        slug,
        _id,
        "categories": categories[]->title,
        }|order(publishedAt desc)
    `),
});

export default Breakfast;
