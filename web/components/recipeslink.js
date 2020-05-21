import React from "react";
import styled from "styled-components";

const RecipesLink = () => {
  return (
    <div className="relative w-full h-12 md:h-16 lg:h-24 my-4 flex">
      <h1 className="z-20 font-script text-big md:text-huge lg:text-vhuge self-center">
        Recipes
      </h1>
      <h2 className="z-20 font-sans text-xxs md:text-base lg:text-xl self-end ml-2 pt-4">
        DIG IN
      </h2>
      <Brush
        className="z-10 w-9/12 md:w-7/12 absolute"
        src="images/recipebrush.png"
        alt="banner"
      />
    </div>
  );
};

const Brush = styled.img`
  @media (min-width: 1024px) {
    left: calc(((100vw - 1024px) / 2) * -1);
  }
`;

export default RecipesLink;
