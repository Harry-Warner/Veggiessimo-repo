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

const Sauces = (props) => {
  const { posts = [] } = props;
  const [searchPosts, setSearchPosts] = useState([]);

  return (
    <>
      <TitleComponent title="Sauces" />
      <Container>
        <MealTitle title="Sauces" />
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

Sauces.getInitialProps = async () => ({
  posts: await client.fetch(groq`
      *[_type == "recipePost" && publishedAt < now() && mealType[]._ref == "a1bf608d-88f0-48f5-939c-71299c042041"]{
        title,
        mainImage,
        slug,
        _id,
        "categories": categories[]->title,
        }|order(publishedAt desc)
    `),
});

export default Sauces;
