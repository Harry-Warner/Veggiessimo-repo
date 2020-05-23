// index.js
import React from "react";
import Link from "next/link";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import styled from "styled-components";
import RecipeList from "../styled/recipeslist";
import AboutLink from "../components/aboutlink";
import RecipesLink from "../components/recipeslink";
import CommunityLink from "../components/communitylink";
import Footer from "../components/footer";
import TitleComponent from "../components/titleComponent.jsx";
import Container from "../styled/container";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Index = (props) => {
  const { posts = [] } = props;

  return (
    <>
      <TitleComponent />
      <Banner className="relative w-full">
        <img
          className="w-full md:hidden bg-white"
          src="images/banner640.png"
          alt="Veggiessimo"
        />
        <img
          className="w-full hidden md:block lg:hidden bg-white"
          src="images/banner768.png"
          alt="Veggiessimo"
        />
        <img
          className="w-screen hidden lg:block bg-white mt-8"
          src="images/bannerFULL.png"
          alt="Veggiessimo"
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
        <RecipeList home>
          {posts.map(
            ({ _id, title = "", mainImage, slug = "", _updatedAt = "" }) =>
              slug && (
                <li key={_id}>
                  <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                    <a className="md:flex">
                      {mainImage && (
                        <img
                          className="h-48 md:h-96 w-full object-cover object-center"
                          src={urlFor(mainImage).url()}
                          alt="Food"
                        />
                      )}
                      <div className="flex md:flex-col md:w-1/3 md:mx-8 md:bg-lightBlueT justify-between">
                        <p className="font-sans self-center text-black uppercase mx-10 my-2 text-sm md:text-lg lg:text-xxl">
                          {title}
                          <span className="vegetarianicon"> &#9419;</span>
                        </p>
                        <div className="font-sans self-center text-black mx-10 my-2 text-xxs">
                          {"  "}({new Date(_updatedAt).toDateString()})
                        </div>
                      </div>
                    </a>
                  </Link>
                  <StyledLine />
                </li>
              )
          )}
        </RecipeList>
        <CommunityLink />
        <Footer />
      </Container>
    </>
  );
};

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`
      *[_type == "post" && publishedAt < now() && categories[]._ref == "327f026c-2dcc-46da-b58f-d876c2be0005"]|order(publishedAt desc)
    `),
});

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

const StyledLine = styled.hr`
  width: 50%;
  margin: 20px auto;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
  @media (min-width: 768px) {
    margin-top: 50px;
  }
`;

export default Index;
