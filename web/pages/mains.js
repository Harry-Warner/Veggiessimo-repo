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

Mains.getInitialProps = async () => ({
  posts: await client.fetch(groq`
      *[_type == "recipePost" && publishedAt < now() && mealType[]._ref == "70c36188-87c5-4b11-a10f-2bd7aa03400d"]{
        title,
        mainImage,
        slug,
        _id,
        "categories": categories[]->title,
        }|order(publishedAt desc)
    `),
});

export default Mains;
