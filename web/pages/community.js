import React from "react";
import styled from "styled-components";
import Link from "next/link";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import Footer from "../components/footer";
import TitleComponent from "../components/titleComponent.jsx";
import Container from "../styled/container";
import RecipeList from "../styled/postlist";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Community = (props) => {
  const { posts = [] } = props;
  return (
    <>
      <TitleComponent title="Community" />
      <Container>
        <StyledTitle className="w-9/12 md:w-7/12 lg:w-6/12 md:h-32 lg:h-32 mx-auto text-center mt-6 lg:mt-16 flex justify-center items-center">
          <h1 className="text-big md:text-huge font-script">Community</h1>
        </StyledTitle>
        <h2 className="w-full text-center font-sans my-6 md:mb-12 lg:mb-16 text-xs md:text-lg lg:text-xl">
          Ideas on how to live a more sustainable lifestyle
        </h2>
        <RecipeList>
          {posts.map(
            ({ _id, title = "", mainImage, slug = "", _updatedAt = "" }) =>
              slug && (
                <li key={_id}>
                  <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                    <a>
                      {mainImage && (
                        <img
                          className="h-48 lg:h-64 w-full object-cover object-center"
                          src={urlFor(mainImage).url()}
                          alt="Food"
                        />
                      )}
                      <div className="flex justify-between">
                        <p className="font-sans self-center text-black uppercase mx-10 my-2 text-sm md:text-lg lg:text-xxl">
                          {title}
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
        <Footer />
      </Container>
    </>
  );
};

Community.getInitialProps = async () => ({
  posts: await client.fetch(groq`
        *[_type == "post" && publishedAt < now() && categories[]._ref == "555c76b7-33d0-47ce-a659-7d22a3d79dcb"]|order(publishedAt desc)
      `),
});

const StyledTitle = styled.div`
  background-image: url("images/pinkbrush640.png");
  background-size: cover;
  background-position: center;

  @media (max-width: 640px) {
    height: 22vw;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    background-image: url("images/pinkbrush768.png");
  }
  @media (min-width: 1024px) {
    background-image: url("images/pinkbrush1024.png");
  }
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
`;

export default Community;
