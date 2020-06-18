import React from "react";
import Link from "next/link";
import styled from "styled-components";

const RecipesLink = () => {
  return (
    <Link href="/recipes">
      <a className="relative w-full h-12 md:h-16 lg:h-24 my-4 flex z-10">
        <Brush
          className="w-9/12 md:w-7/12 absolute"
          src="images/recipebrush.png"
          alt="paint brush swipe used as a banner for the heading"
        />
        <h1 className="z-10 font-script text-big md:text-huge lg:text-huge self-center ml-1 md:ml-2">
          Recipes
        </h1>
        <h2 className="z-10 font-sans text-xxs md:text-base lg:text-xl self-end ml-2 pt-4">
          DIG IN
        </h2>
      </a>
    </Link>
  );
};

const Brush = styled.img`
  @media (min-width: 64rem) {
    left: calc(((100vw - 64rem) / 2) * -1);
  }
`;

export default RecipesLink;
