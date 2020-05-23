import React from "react";
import styled from "styled-components";

const RecipeTypes = () => {
  return (
    <>
      <h2 className="w-full md:w-1/2 lg:w-1/3 h-12 md:h-16 lg:h-20 mx-auto text-center my-6 bg-lightBlueT flex justify-center items-center text-big md:text-huge font-script">
        Which Meal?
      </h2>
      <div className="w-full flex flex-col md:flex-row justify-center">
        <StyledLink
          href="/breakfast"
          className="relative mx-auto cursor-pointer"
        >
          <img
            className="h-48 md:h-56 lg:h-56 m-6"
            src="images/breakfast.png"
            alt="food"
          />
          <h2 className="text-xxl font-bold m-6 h-48 md:h-56 lg:h-56 font-sans bg-lightPinkT uppercase">
            Breakfast
          </h2>
        </StyledLink>
        <StyledLink className="relative mx-auto cursor-pointer">
          <img
            className="h-48 md:h-56 lg:h-56 m-6"
            src="images/dinner.png"
            alt="food"
          />
          <h2 className="text-xxl font-bold m-6 h-48 md:h-56 lg:h-56 font-sans bg-lightPinkT uppercase">
            Mains
          </h2>
        </StyledLink>
        <StyledLink className="relative mx-auto cursor-pointer md:hidden lg:block">
          <img
            className="h-48 md:h-56 lg:h-56 m-6"
            src="images/dessert.png"
            alt="food"
          />
          <h2 className="text-xxl font-bold m-6 h-48 md:h-56 lg:h-56 font-sans bg-lightPinkT uppercase">
            Dessert
          </h2>
        </StyledLink>
      </div>
      <div className="w-full hidden md:flex lg:hidden justify-center">
        <StyledLink className="relative mx-auto cursor-pointer">
          <img className="h-56 m-6" src="images/dessert.png" alt="food" />
          <h2 className="text-xxl font-bold m-6 h-56 font-sans bg-lightPinkT uppercase">
            Dessert
          </h2>
        </StyledLink>
      </div>
    </>
  );
};

const StyledLink = styled.a`
  h2 {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    width: 35%;
    text-align: center;
    font-size: 1rem;
    visibility: visible;
    transition: all 0.3s ease-in-out;

    @media (min-width: 1024px) {
      font-size: 0;
      visibility: hidden;
      width: 0%;
    }
  }

  &:hover {
    h2 {
      width: 35%;
      visibility: visible;
      font-size: 1.5rem;
    }
  }
`;

export default RecipeTypes;
