import React from "react";
import Link from "next/link";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import client from "../../../client";
import TitleComponent from "../../../components/titleComponent.jsx";
import styled from "styled-components";
import Colors from "../../../styled/colors";
import { Camera } from "@styled-icons/evil/Camera";
import PostHeading from "../../../components/postheading";
import serializers from "../../../styled/serializers";
import MetaTags from "../../../components/metatags";

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
    } else if (minutes === 0) {
      if (hours === 1) {
        return `${hours} hour`;
      } else {
        return `${hours} hours`;
      }
    } else {
      if (hours === 1) {
        return `${hours} hour and ${minutes} minutes`;
      } else {
        return `${hours} hours and ${minutes} minutes`;
      }
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
      <MetaTags
        description={post.seoDescription}
        type="article"
        title={post.seoTitle}
        url={`post/community/${post.slug.current}`}
        imageSrc={urlFor(post.mainImage).url()}
      />
      <TitleComponent title={post.seoTitle} />
      <article>
        <PostHeading
          category={post.mealType}
          title={post.title}
          name={post.name}
        />
        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          {post.mainImage && (
            <div className="w-full md:w-8/12 flex justify-center">
              <img
                className="w-full h-64 md:h-84 lg:h-108 object-cover object-center"
                src={urlFor(post.mainImage).url()}
                alt={post.title}
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
        <div className="w-full md:w-8/12 md:text-xl mt-2 md:mt-8 p-4 pb-0 bg-greenT font-bold flex flex-col">
          <BlockContent
            serializers={serializers}
            blocks={post.description}
            {...client.config()}
          />
        </div>
        <div className="grid grid-cols-1 grid-rows-20 md:grid-cols-12 md:grid-rows-20 my-8 md:mt-16 md:mb-0">
          <div className="col-span-12 md:col-span-7 flex flex-col md:px-10 bg-white">
            <h2 className="text-xxxl md:text-vbig font-script m-2">
              Ingredients:
            </h2>
            <div className="flex mx-4 mb-4 font-sans">
              <BlockContent
                serializers={serializers}
                blocks={post.ingredients}
                imageOptions={{ w: 320, h: 240, fit: "max" }}
                {...client.config()}
              />
            </div>
          </div>
          <hr className="col-span-12 self-center w-full h-3 border-none bg-blueT my-5" />
          <div className="col-span-12 md:col-span-12 lg:col-span-8 row-span-1 flex flex-col md:px-10 bg-white">
            <h2 className="m-2 text-xxxl md:text-vbig font-script">Method:</h2>
            <div className="flex mx-4 mb-4 text-base md:text-xl">
              <BlockContent
                serializers={serializers}
                blocks={post.body}
                {...client.config()}
              />
            </div>
          </div>
          <div className="col-span-12 md:row-start-4 lg:col-start-9 lg:col-end-12 lg:row-start-3 flex lg:flex-col w-11/12 md:w-7/12 lg:w-full mx-auto my-4 md:my-8 h-32 md:h-40 lg:h-84 self-center items-center justify-center md:justify-between lg:justify-around bg-white border-blue border-solid border-2 rounded-lg">
            <h1 className="hidden lg:block text-center text-big font-script">
              Have you done it?
            </h1>
            <StyledCam />
            <StyledTrend className="flex flex-col justify-around md:pr-10 lg:pr-0">
              <h1 className="lg:hidden text-center font-script">
                Have you done it?
              </h1>
              <h3 className="text-center font-sans uppercase">let us know</h3>
              <h2 className="text-center font-sans uppercase">
                #makeitveggiessimo
              </h2>
            </StyledTrend>
          </div>
          <StyledList className="col-span-12 md:col-start-8 md:col-end-12 md:row-start-1 relative grid grid-cols-2 md:grid-cols-1 w-full md:w-full mx-auto py-12 px-4 gap-6 bg-lightBlueT">
            <h1 className="absolute w-full text-center text-xl pt-2 top-0 left-0 font-sans font-bold uppercase">
              - More Great Recipes -
            </h1>
            {recipes.map(
              ({ _id, title = "", mainImage, slug = "" }) =>
                slug && (
                  <li key={_id}>
                    <Link
                      href="/post/recipes/[slug]"
                      as={`/post/recipes/${slug.current}`}
                    >
                      <a>
                        <div className="flex flex-col md:flex-row">
                          {mainImage && (
                            <img
                              className="w-full md:w-1/2 h-28 md:h-32 object-cover object-center"
                              src={urlFor(mainImage).width(300).url()}
                              alt="Food"
                            />
                          )}
                          <h2 className="p-1 flex items-center text-center md:text-left justify-center md:justify-start font-sans bg-white md:bg-lightPinkT h-20 md:h-32 md:w-1/2 md:pl-3 text-base font-bold md:text-lg lg:text-xl">
                            {title}
                          </h2>
                        </div>
                      </a>
                    </Link>
                  </li>
                )
            )}
            <Link href="/recipes">
              <a
                href="/recipes"
                className="absolute w-full text-center bottom-0 pb-2 text-base md:text-xl uppercase underline"
              >
                See all
              </a>
            </Link>
          </StyledList>
        </div>
      </article>
    </>
  );
};

const links = `...,
                markDefs[]{
                  ...,
                  _type == "postLink" => {
                    "slug": @.reference->slug,
                    "type": @.reference->_type,
                  }
                }
              `;

const queryPost = groq`*[_type == "recipePost" && slug.current == $slug][0]{
title,
seoTitle,
seoDescription,
slug,
mainImage,
cookingTime,
"name": author->name,
"mealType": mealType[]->title,
"categories": categories[]->title,
shortDescription,
description[]{${links}},
ingredients[]{${links}},
servings,
body[]{${links}},
}`;

const queryRecipes = groq`*[_type == "recipePost" && publishedAt < now() && slug.current != $slug]|order(publishedAt desc){
  title,
  mainImage,
  slug,
  _id,
  "categories": categories[]->title,
  }[0...3]
`;

RecipePost.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  return {
    post: await client.fetch(queryPost, { slug }),
    recipes: await client.fetch(queryRecipes, { slug }),
  };
};

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
    @media (min-width: 48rem) {
      background: transparent;
      border-bottom: 2px solid ${Colors.blue};
      text-align: start;
      padding: 0.625rem 0;
      margin: 0 1rem;
      flex-direction: row;
      justify-content: start;

      h2 {
        font-size: 1.4rem;
      }

      p {
        font-size: 1.25rem;
        font-weight: 600;
        padding: 0.125rem 0.625rem 0;
      }

      &:last-child,
      &:first-child {
        flex-direction: column;
      }
      &:last-child {
        border-bottom: none;
      }
    }
    @media (min-width: 64rem) {
      h2 {
        font-size: 1.75rem;
      }
      p {
        font-size: 1.5rem;
        padding: 0.25rem 0.625rem 0;
      }
    }
  }
`;

const StyledCam = styled(Camera)`
  width: 7.5rem;
  height: 7.5rem;
  margin-right: 0.3125rem;

  @media (min-width: 48rem) {
    width: 12.5rem;
    height: 12.5rem;
  }
  @media (min-width: 64rem) {
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

  @media (min-width: 30rem) {
    h1 {
      font-size: 1.875rem;
    }
    h2 {
      font-size: 1.125rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
`;

const StyledList = styled.div`
  height: fit-content;
  align-self: center;

  li {
    @media (max-width: 47.9rem) {
      &:nth-child(3) {
        display: none;
      }
    }
  }
`;

export default RecipePost;
