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
    if (hours === 0) {
      return `${minutes} minutes`;
    } else {
      return `${hours} hour and ${minutes} minutes`;
    }
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
          <h2 className="text-lg lg:text-xxxl text-center font-sans uppercase pt-4 pb-1 lg:mt-16">
            {post.mealType}
          </h2>
          <h1 className="text-big md:text-huge lg:text-vhuge text-center py-1 font-script">
            {post.title}
          </h1>
          <h3 className="text-sm md:text-base md:text-xl text-center font-sans py-1">
            By {post.name}
          </h3>
          <div className="w-full flex justify-center">
            <StyledFace />
            <a href="https://www.instagram.com/veggiessimo.au/">
              <StyledInst />
            </a>
            <StyledPin />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center w-full">
            {post.mainImage && (
              <div className="w-full md:w-8/12 flex justify-center">
                <img
                  className="w-full md:h-84 lg:h-108 object-cover object-center"
                  src={urlFor(post.mainImage).width(300).url()}
                  alt="food"
                />
              </div>
            )}
            <StyledBox className="grid grid-cols-2 md:grid-cols-1 gap-tiny my-2 w-full md:w-4/12 h-32 md:h-full bg-lightPink md:bg-opacity-0">
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
          </div>
          <div className="flex flex-col md:flex-row my-8 md:my-16">
            <div className="flex flex-col md:px-10">
              <h2 className="text-xxxl md:text-vbig font-script m-2">
                Ingredients:
              </h2>
              <div className="flex mx-4 mb-4 text-base md:text-xxl font-sans">
                <BlockContent
                  blocks={post.ingredients}
                  imageOptions={{ w: 320, h: 240, fit: "max" }}
                  {...client.config()}
                />
              </div>
            </div>
            <hr className="w-full h-3 md:hidden border-none bg-blueT my-5" />
            <div className="flex flex-col md:px-10">
              <h2 className="m-2 text-xxxl md:text-vbig font-script">
                Method:
              </h2>
              <div className="flex mx-4 mb-4 text-base md:text-xl font-sans">
                <BlockContent
                  blocks={post.body}
                  imageOptions={{ w: 320, h: 240, fit: "max" }}
                  {...client.config()}
                />
              </div>
            </div>
          </div>
        </article>
        <div className="flex flex-col justify-center md:flex-row">
          <div className="flex md:flex-col w-11/12 md:w-1/3 lg:w-1/4 mx-auto my-4 h-32 md:h-84 items-center justify-center md:justify-around bg-white border-blue border-solid border-2 rounded-lg">
            <h1 className="hidden md:block text-center text-big font-script">
              Have you done it?
            </h1>
            <StyledCam />
            <StyledTrend className="flex flex-col justify-around">
              <h1 className="md:hidden text-center font-script">
                Have you done it?
              </h1>
              <h3 className="text-center font-sans uppercase">let us know</h3>
              <h2 className="text-center font-sans uppercase">
                #makeitveggiessimo
              </h2>
            </StyledTrend>
          </div>
          <div className="relative grid grid-cols-2 w-full md:w-5/12 mx-auto py-12 px-4 gap-4 bg-lightBlueT">
            <h1 className="absolute w-full text-center text-xl top-0 left-0 font-sans font-bold uppercase">
              - More Great Recipes -
            </h1>
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
                          <p className="font-sans self-center text-black mt-4 mb-6 text-xs md:text-base lg:text-lg leading-tight">
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
`;
const StyledFace = styled(Facebook)`
  width: 2rem;
  height: 2rem;
  margin: 10px;
`;
const StyledPin = styled(PinterestWithCircle)`
  width: 2rem;
  height: 2rem;
  margin: 10px;
`;

const StyledBox = styled.div`
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${Colors.lightBlueT};
    text-align: center;

    h2 {
      font-size: 1rem;
      font-family: "Fira Sans", sans-serif;
      text-transform: uppercase;
    }
    p {
      font-size: 0.875rem;
      font-family: "Fira Sans", sans-serif;
      font-weight: 600;
    }
    @media (min-width: 768px) {
      background: transparent;
      border-bottom: 2px solid ${Colors.blue};
      text-align: start;
      padding: 10px 0;
      margin: 0 15px;
      flex-direction: row;
      justify-content: start;

      h2 {
        font-size: 1.4rem;
      }

      p {
        font-size: 1.25rem;
        font-weight: 600;
        padding: 2px 10px 0;
      }

      &:last-child,
      &:first-child {
        flex-direction: column;
      }
      &:last-child {
        border-bottom: none;
      }
    }
    @media (min-width: 1024px) {
      h2 {
        font-size: 1.75rem;
      }
      p {
        font-size: 1.5rem;
        padding: 4px 10px 0;
      }
    }
  }
`;

const StyledCam = styled(Camera)`
  width: 7.5rem;
  height: 7.5rem;
  margin-right: 5px;

  @media (min-width: 768px) {
    width: 12.5rem;
    height: 12.5rem;
    margin-right: 0;
  }
`;

const StyledTrend = styled.div`
  h1 {
    font-size: 7.5vw;
  }
  h2 {
    font-size: 5vw;
  }
  h3 {
    font-size: 4vw;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 17.5px;
    }
    h3 {
      font-size: 15px;
    }
  }
`;

export default RecipePost;
