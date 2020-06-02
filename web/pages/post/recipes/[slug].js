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
import RecipeList from "../../../styled/postlist";
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
          <StyledBox className="grid grid-cols-2 gap-tiny my-2 w-full h-32 bg-blue">
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
          <div className="flex mx-4 mb-4 text-xs font-sans italic">
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
        <RecipeList className="hidden">
          {recipes.map(
            ({ _id, title = "", mainImage, slug = "" }) =>
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
                      <div className="flex justify-center">
                        <p className="font-sans self-center text-black uppercase mx-10 my-2 text-sm md:text-lg lg:text-xxl">
                          {title}
                          <span className="vegetarianicon"> &#9419;</span>
                        </p>
                      </div>
                    </a>
                  </Link>
                  <StyledLine />
                </li>
              )
          )}
        </RecipeList>
        <div className="flex w-11/12 mx-auto h-32 items-center justify-center bg-white border-blue border-solid border-2 rounded-lg">
          <StyledCam />
          <div className="flex flex-col justify-around">
            <h1 className="text-center font-script text-lg">
              Have you done it?
            </h1>
            <h2 className="text-center font-sans text-xs uppercase">
              let us know
            </h2>
            <h2 className="text-center font-sans text-sm uppercase">
              #makeitveggiessimo
            </h2>
          </div>
        </div>
        <Footer />
      </Container>
    </>
  );
};

const query = groq`*[_type == "recipePost" && slug.current == $slug][0]{
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

RecipePost.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  return {
    post: await client.fetch(query, { slug }),
    recipes: await client.fetch(groq`
    *[_type == "recipePost" && publishedAt < now() && !slug.current]|order(publishedAt desc){
      title,
      mainImage,
      slug,
      _id,
      "categories": categories[]->title,
      }[0...4]
  `),
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
    background: ${Colors.lightBlue};

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

const StyledCam = styled(Camera)`
  width: 6rem;
  height: 6rem;
  margin-right: 30px;
`;

export default RecipePost;
