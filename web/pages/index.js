// index.js
import React, { useState, useEffect } from "react";
import Link from "next/link";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import styled from "styled-components";
import RecipesLink from "../components/recipeslink";
import AboutLink from "../components/aboutlink";
import CommunityLink from "../components/communitylink";
import Footer from "../components/footer";
import Container from "../styled/container";
import MetaTags from "../components/metatags";
import Modal from "../components/modal";
import Cookie from "js-cookie";
import { parseCookies } from "../lib/parseCookies";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Index = (props) => {
  const { posts = [], initialSubscribedValue = false } = props;
  const [display, setDisplay] = useState(false);
  const [premail, setPremail] = useState("");
  const [subscribed, setSubscribed] = useState(() =>
    JSON.parse(initialSubscribedValue)
  );

  useEffect(() => {
    Cookie.set("subscribed", JSON.stringify(subscribed));
  }, [subscribed]);

  return (
    <>
      <MetaTags
        description="Welcome to the Veggiessimo website. We want to show you a more SUSTAINABLE and TASTY way of living that not only makes you and your gut feel better, but is also kind to the planet."
        type="website"
        title="Veggiessimo - Meals + Love"
        url=""
        imageSrc="https://veggiessimo.com.au/images/cook-with-us-1-sm.png"
      />
      <Modal
        preventAuto={subscribed ? true : false}
        premail={premail}
        setSubscribed={setSubscribed}
        display={display}
        setDisplay={setDisplay}
      />
      <Banner className="relative w-full">
        <img
          className="w-full md:hidden bg-white"
          src="images/banner640.png"
          alt="The veggiessimo banner for the website. a green paint brush swipe across the top and bottom with the company name scripted in the middle between two pencil drawings of vegetables"
        />
        <img
          className="w-full hidden md:block lg:hidden bg-white"
          src="images/banner768.png"
          alt="The veggiessimo banner for the website. a green paint brush swipe across the top and bottom with the company name scripted in the middle between two pencil drawings of vegetables"
        />
        <img
          className="w-screen hidden lg:block bg-white mt-8"
          src="images/bannerFULL.png"
          alt="The veggiessimo banner for the website. a green paint brush swipe across the top and bottom with the company name scripted in the middle between two pencil drawings of vegetables"
        />
        <Title className="hidden lg:block w-full absolute text-center font-script">
          Veggiessimo
        </Title>
        <Text1 className="hidden lg:block absolute font-sans uppercase">
          Meals + love
        </Text1>
      </Banner>
      <Container>
        <AboutLink />
        <RecipesLink />
        <Recipes>
          {posts.map(
            ({
              _id,
              title = "",
              mainImage,
              slug = "",
              _updatedAt = "",
              shortDescription = "",
            }) =>
              slug && (
                <li className="my-4 md:my-6 lg:my-8" key={_id}>
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
                        <div className="text-wrapper flex flex-col text-wrapper text-sm font-bold h-64 md:h-84 lg:h-108 font-sans bg-lightPinkT">
                          <p className="w-10/12">{shortDescription}</p>
                          <div className="font-sans self-center text-black mx-10 my-2 text-xxs">
                            {"  "}({new Date(_updatedAt).toDateString()})
                          </div>
                        </div>
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
        </Recipes>
        <CommunityLink />
        <Footer
          setDisplay={setDisplay}
          premail={premail}
          setPremail={setPremail}
        />
      </Container>
    </>
  );
};

Index.getInitialProps = async ({ req }) => {
  const cookies = parseCookies(req);

  return {
    initialSubscribedValue: cookies.subscribed,
    posts: await client.fetch(groq`
      *[_type == "recipePost" && publishedAt < now()]|order(publishedAt desc)[0...4]
    `),
  };
};

const Banner = styled.div`
  height: fit-content;
`;

const Title = styled.h1`
  top: 25%;
  font-size: 9vw;
`;

const Text1 = styled.h2`
  top: 70%;
  left: 55%;
  font-size: 2vw;
`;

const Recipes = styled.ul`
  width: 100%;
  margin: 0.625rem auto;
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled.div`
  height: fit-content;
  .text-wrapper {
    position: absolute;
    display: none;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    width: 35%;
    text-align: center;
    font-size: 1rem;
    visibility: visible;
    transition: all 0.3s ease-in-out;

    @media (min-width: 64rem) {
      display: flex;
      font-size: 0;
      visibility: hidden;
      width: 0%;
    }
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
