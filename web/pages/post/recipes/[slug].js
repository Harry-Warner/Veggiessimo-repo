import React from "react";
import Link from "next/link";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import client from "../../../client";
import TitleComponent from "../../../components/titleComponent.jsx";
import Footer from "../../../components/footer";
import styled from "styled-components";
import Container from "../../../styled/container";
import Colors from "../../../styled/colors";
import { Instagram } from "@styled-icons/entypo-social/Instagram";
import { Facebook } from "@styled-icons/entypo-social/Facebook";
import { PinterestWithCircle } from "@styled-icons/entypo-social/PinterestWithCircle";
import { Camera } from "@styled-icons/evil/Camera";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const RecipePost = (props) => {
  const { post = [], recipes = [] } = props;
  function cooking_time(num) {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    return `${hours}:${minutes}`;
  }
  function category_list(cat) {
    let str = [];
    for (let i = 0; i < cat.length; i++) {
      if (i === 0) {
        str[i] = `${cat[i]}`;
      } else {
        str[i] = `, ${cat[i]}`;
      }
    }
    return str;
  }
  return (
    <>
      <TitleComponent title={post.title} />
      <Container>
        <article>
          <h2 className="text-lg text-center font-sans uppercase pt-4 pb-1">
            {post.mealType}
          </h2>
          <h1 className="text-big text-center py-1 font-script">
            {post.title}
          </h1>
          <h3 className="text-sm text-center font-sans py-1">By {post.name}</h3>
          <div className="w-full flex justify-center">
            <StyledFace />
            <a href="https://www.instagram.com/veggiessimo.au/">
              <StyledInst />
            </a>
            <StyledPin />
          </div>
          {post.mainImage && (
            <div>
              <img
                className="h-56 w-full object-cover object-center"
                src={urlFor(post.mainImage).width(300).url()}
                alt="food"
              />
            </div>
          )}
          <StyledBox className="grid grid-cols-2 gap-tiny my-2 w-full h-32 bg-lightPink">
            <div>
              <h2>Cook time:</h2>
              <p>{cooking_time(post.cookingTime)}</p>
            </div>
            <div>
              <h2>Servings:</h2>
              <p>{post.servings}</p>
            </div>
            <div>
              <h2>Category:</h2>
              <p>{post.mealType}</p>
            </div>
            <div>
              <h2>Extra Info:</h2>
              <p>{category_list(post.categories)}</p>
            </div>
          </StyledBox>
          <h2 className="text-lg font-script m-2">Ingredients:</h2>
          <div className="flex mx-4 mb-4 text-xs font-sans">
            <BlockContent
              blocks={post.ingredients}
              imageOptions={{ w: 320, h: 240, fit: "max" }}
              {...client.config()}
            />
          </div>
          <hr className="w-full h-3 border-none bg-blue my-5" />
          <h2 className="m-2 text-lg font-script">Method:</h2>
          <div className="flex mx-4 mb-4 text-xs font-sans">
            <BlockContent
              blocks={post.body}
              imageOptions={{ w: 320, h: 240, fit: "max" }}
              {...client.config()}
            />
          </div>
        </article>
        <div className="relative w-full">
          <StyledTitle className="absolute w-full">
            <div className="w-9/12 md:w-7/12 lg:w-6/12 md:h-32 lg:h-32 mx-auto text-center my-6 flex justify-center items-center">
              <h1 className="text-xxl md:text-huge font-sans uppercase">
                - More Great Recipes -
              </h1>
            </div>
          </StyledTitle>
          <div className="grid grid-cols-2 w-full px-8 py-12 gap-4 bg-lightPinkT mt-16">
            {recipes.map(
              ({ _id, title = "", mainImage, slug = "" }) =>
                slug && (
                  <li key={_id}>
                    <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                      <a>
                        {mainImage && (
                          <img
                            className="w-full object-cover object-center"
                            src={urlFor(mainImage).url()}
                            alt="Food"
                          />
                        )}
                        <div className="flex flex-col bg-white py-1">
                          <p className="font-sans self-center text-black mx-10 mt-4 mb-6 text-xs md:text-base lg:text-lg leading-tight">
                            {title}
                          </p>
                        </div>
                      </a>
                    </Link>
                  </li>
                )
            )}
          </div>
        </div>
        <div className="flex w-11/12 mx-auto my-4 h-32 items-center justify-center bg-white border-blue border-solid border-2 rounded-lg">
          <StyledCam />
          <StyledTrend className="flex flex-col justify-around">
            <h1 className="text-center font-script text-xxxl">
              Have you done it?
            </h1>
            <h3 className="text-center font-sans text-base uppercase">
              let us know
            </h3>
            <h2 className="text-center font-sans text-lg uppercase">
              #makeitveggiessimo
            </h2>
          </StyledTrend>
        </div>
        <Footer />
      </Container>
    </>
  );
};

const queryPost = groq`*[_type == "recipePost" && slug.current == $slug][0]{
title,
mainImage,
cookingTime,
"name": author->name,
"mealType": mealType[]->title,
"categories": categories[]->title,
ingredients,
servings,
body
}`;

const queryRecipes = groq`*[_type == "recipePost" && publishedAt < now() && slug.current != $slug]|order(publishedAt desc){
  title,
  mainImage,
  slug,
  _id,
  "categories": categories[]->title,
  }[0...4]
`;

RecipePost.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  return {
    post: await client.fetch(queryPost, { slug }),
    recipes: await client.fetch(queryRecipes, { slug }),
  };
};

const StyledInst = styled(Instagram)`
  width: 2rem;
  height: 2rem;
  margin: 10px;

  @media (min-width: 768px) {
    width: 3rem;
    height: 3rem;
    margin: 15px;
  }
`;
const StyledFace = styled(Facebook)`
  width: 2rem;
  height: 2rem;
  margin: 10px;

  @media (min-width: 768px) {
    width: 3rem;
    height: 3rem;
    margin: 15px;
  }
`;
const StyledPin = styled(PinterestWithCircle)`
  width: 2rem;
  height: 2rem;
  margin: 10px;

  @media (min-width: 768px) {
    width: 3rem;
    height: 3rem;
    margin: 15px;
  }
`;

const StyledBox = styled.div`
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${Colors.lightBlueT};

    h2 {
      text-align: center;
      font-size: 1rem;
      font-family: "Fira Sans", sans-serif;
      text-transform: uppercase;
    }
    p {
      text-align: center;
      font-size: 0.875rem;
      font-family: "Fira Sans", sans-serif;
    }
  }
`;

const StyledTitle = styled.div`
  top: -30%;
  div {
    background-image: url("../../images/mealbrush640.png");
    background-size: cover;
    background-position: center;

    @media (max-width: 640px) {
      height: 22vw;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      background-image: url("../../images/mealbrush768.png");
    }
    @media (min-width: 1024px) {
      background-image: url("../../images/mealbrush1024.png");
    }
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 6.5vw;
    }
  }
`;

const StyledCam = styled(Camera)`
  width: 7.5rem;
  height: 7.5rem;
  margin-right: 5px;
`;

const StyledTrend = styled.div`
  @media (max-width: 640px) {
    h1 {
      font-size: 7.5vw;
    }
    h2 {
      font-size: 5vw;
    }
    h3 {
      font-size: 4vw;
    }
  }
`;

export default RecipePost;
