import React, { useState } from "react";
import Link from "next/link";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import TitleComponent from "../components/titleComponent.jsx";
import RecipeList from "../styled/postlist";
import Footer from "../components/footer";
import Container from "../styled/container";
import SearchFilter from "../components/searchfilter";
import MealTitle from "../components/mealtitle";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Breakfast = (props) => {
  const { posts = [] } = props;
  const [searchPosts, setSearchPosts] = useState([]);

  return (
    <>
      <TitleComponent title="Breakfast" />
      <Container>
        <MealTitle title="Breakfast" />
        <SearchFilter posts={posts} setSearchPosts={setSearchPosts} />
        <RecipeList>
          {searchPosts &&
            searchPosts.map(
              ({ _id, title = "", mainImage, slug = "" }) =>
                slug && (
                  <li key={_id}>
                    <Link
                      href="/post/recipes/[slug]"
                      as={`/post/recipes/${slug.current}`}
                    >
                      <a>
                        {mainImage && (
                          <img
                            className="h-48 lg:h-64 w-full object-cover object-center"
                            src={urlFor(mainImage).url()}
                            alt="Food"
                          />
                        )}
                        <div className="flex justify-center">
                          <p className="font-sans self-center text-black uppercase mx-10 my-2 text-sm md:text-lg lg:text-xxl">
                            {title}
                            <span className="vegetarianicon"> &#9419;</span>
                          </p>
                        </div>
                      </a>
                    </Link>
                  </li>
                )
            )}
        </RecipeList>
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
