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

const SmallBites = (props) => {
  const { posts = [] } = props;
  const [searchPosts, setSearchPosts] = useState([]);
  const [loadSearchPosts, setLoadSearchPosts] = useState(searchPosts);

  return (
    <>
      <MetaTags
        description="Delicious small bites"
        type="object"
        title="Small Bites | Veggiessimo"
        url="smallbites"
        imageSrc="https://veggiessimo.com.au/images/smallbites.png"
      />
      <TitleComponent title="Small Bites" />
      <Container>
        <MealTitle title="Small Bites" />
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

SmallBites.getInitialProps = async () => ({
  posts: await client.fetch(groq`
      *[_type == "recipePost" && publishedAt < now() && mealType[]._ref == "d6cb24dc-edb4-4476-af0f-1eb668455c29"]{
        title,
        mainImage,
        slug,
        _id,
        "categories": categories[]->title,
        }|order(publishedAt desc)
    `),
});

export default SmallBites;
