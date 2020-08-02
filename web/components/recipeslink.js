import React from "react";
import Link from "next/link";
import styled from "styled-components";

const RecipesLink = () => {
  return (
    <Link href="/recipes">
      <a
        href="/recipes"
        className="relative w-full h-12 sm:h-16 lg:h-24 my-4 flex z-10"
      >
        <Brush
          className="w-9/12 md:w-7/12 absolute"
          src="images/recipebrush.png"
          alt="Try out our Simple + sustainable vegetarian recipes for a happy + healthy day from start to finish"
        />
        <h2 className="z-10 font-script text-big sm:text-huge self-center ml-1 md:ml-2">
          Recipes
        </h2>
        <h3 className="z-10 font-sans text-xxs md:text-base lg:text-xl self-end ml-2 pt-4 uppercase">
          Dig in
        </h3>
      </a>
    </Link>
  );
};

const Brush = styled.img`
  @media (min-width: 40rem) {
    left: calc(((100vw - 40rem) / 2) * -1);
  }
  @media (min-width: 48rem) {
    left: calc(((100vw - 48rem) / 2) * -1);
  }
  @media (min-width: 64rem) {
    left: calc(((100vw - 64rem) / 2) * -1);
  }
`;

export default RecipesLink;
