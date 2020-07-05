// index.js
import React from "react";
import Link from "next/link";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import styled from "styled-components";
import RecipesLink from "../components/recipeslink";
import AboutLink from "../components/aboutlink";
import CommunityLink from "../components/communitylink";
import MetaTags from "../components/metatags";
import Banner from "../components/banner";
import SeeAll from "../components/seeAllButton";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Index = (props) => {
  const { posts = [] } = props;

  return (
    <>
      <MetaTags
        description="Welcome to the Veggiessimo website. We want to show you a more SUSTAINABLE and TASTY way of living that not only makes you and your gut feel better, but is also kind to the planet."
        type="website"
        title="Veggiessimo - Meals + Love"
        url=""
        imageSrc="https://veggiessimo.com.au/images/cook-with-us-1-sm.png"
      />
      <Banner />
      <AboutLink />
      <SeeAll url="/about" text="More on our story" />
      <RecipesLink />
      <Recipes>
        {posts.map(
          ({ _id, title = "", mainImage, slug = "" }) =>
            slug && (
              <li className="my-4 sm:my-6 lg:my-8" key={_id}>
                <Link
                  href="/post/recipes/[slug]"
                  as={`/post/recipes/${slug.current}`}
                >
                  <a>
                    <StyledLink className="relative mx-auto w-full md:w-11/12 lg:w-10/12">
                      {mainImage && (
                        <img
                          className="h-56 md:h-84 lg:h-108 w-full object-cover object-center"
                          src={urlFor(mainImage).url()}
                          alt={title}
                        />
                      )}
                    </StyledLink>
                    <div className="w-full md:w-11/12 lg:w-10/12 mx-auto bg-lightBlueT">
                      <p className="font-sans text-center text-black uppercase mx-10 my-2 text-sm md:text-lg lg:text-xxl">
                        {title}
                        <span> &#9419;</span>
                      </p>
                    </div>
                  </a>
                </Link>
              </li>
            )
        )}
        <SeeAll url="/recipes" text="See more Recipes!" />
      </Recipes>
      <CommunityLink />
      <SeeAll url="/community" text="step into sustainability" />
    </>
  );
};

Index.getInitialProps = async () => {
  return {
    posts: await client.fetch(groq`
      *[_type == "recipePost" && publishedAt < now()]|order(publishedAt desc)[0...4]
    `),
  };
};

const Recipes = styled.ul`
  width: 100%;
  margin: 0.625rem auto;
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled.div`
  height: fit-content;
  }

  &:hover {
    .text-wrapper {
      width: 35%;
      visibility: visible;
      font-size: 1.5rem;
    }
  }
`;

export default Index;
