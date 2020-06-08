import React from "react";
import Link from "next/link";
import styled from "styled-components";

const RecipeTypes = () => {
  return (
    <>
      <StyledHeader className="w-9/12 md:w-7/12 lg:w-6/12 md:h-32 lg:h-32 mx-auto text-center my-6 lg:mt-16 flex justify-center items-center">
        <h1 className="text-big md:text-huge font-script">Which Meal?</h1>
      </StyledHeader>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 justify-center">
        <StyledLink className="relative mx-auto cursor-pointer">
          <Link href="/breakfast">
            <a>
              <img
                className="h-28 md:h-40 lg:h-56 my-4"
                src="images/breakfast.png"
                alt="food"
              />
              <h2 className="text-xxl font-bold my-4 h-28 md:h-40 lg:h-56 font-sans bg-lightPinkT uppercase">
                Breakfast
              </h2>
            </a>
          </Link>
        </StyledLink>
        <StyledLink className="relative mx-auto cursor-pointer">
          <Link href="/mains">
            <a>
              <img
                className="h-28 md:h-40 lg:h-56 my-4"
                src="images/dinner.png"
                alt="food"
              />
              <h2 className="text-xxl font-bold my-4 h-28 md:h-40 lg:h-56 font-sans bg-lightPinkT uppercase">
                Mains
              </h2>
            </a>
          </Link>
        </StyledLink>
        <StyledLink className="relative mx-auto cursor-pointer">
          <Link href="/dessert">
            <a>
              <img
                className="h-28 md:h-40 lg:h-56 my-4"
                src="images/dessert.png"
                alt="food"
              />
              <h2 className="text-xxl font-bold my-4 h-28 md:h-40 lg:h-56 font-sans bg-lightPinkT uppercase">
                Dessert
              </h2>
            </a>
          </Link>
        </StyledLink>
        <StyledLink className="relative mx-auto cursor-pointer">
          <Link href="/smallbites">
            <a>
              <img
                className="h-28 md:h-40 lg:h-56 my-4"
                src="images/dessert.png"
                alt="food"
              />
              <h2 className="text-xxl font-bold my-4 h-28 md:h-40 lg:h-56 font-sans bg-lightPinkT uppercase">
                Small Bites
              </h2>
            </a>
          </Link>
        </StyledLink>
        <StyledLink className="relative mx-auto cursor-pointer">
          <Link href="/soups-and-salads">
            <a>
              <img
                className="h-28 md:h-40 lg:h-56 my-4"
                src="images/dessert.png"
                alt="food"
              />
              <h2 className="text-xxl font-bold my-4 h-28 md:h-40 lg:h-56 font-sans bg-lightPinkT uppercase">
                Soups & Salads
              </h2>
            </a>
          </Link>
        </StyledLink>
        <StyledLink className="relative mx-auto cursor-pointer">
          <Link href="/sauces">
            <a>
              <img
                className="h-28 md:h-40 lg:h-56 my-4"
                src="images/dessert.png"
                alt="food"
              />
              <h2 className="text-xxl font-bold my-4 h-28 md:h-40 lg:h-56 font-sans bg-lightPinkT uppercase">
                Sauces
              </h2>
            </a>
          </Link>
        </StyledLink>
      </div>
    </>
  );
};

const StyledHeader = styled.div`
  background-image: url("images/mealbrush640.png");
  background-size: cover;
  background-position: center;

  @media (max-width: 640px) {
    height: 22vw;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    background-image: url("images/mealbrush768.png");
  }
  @media (min-width: 1024px) {
    background-image: url("images/mealbrush1024.png");
  }
`;

const StyledLink = styled.div`
  h2 {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    width: 45%;
    text-align: center;
    font-size: 0.875rem;
    visibility: visible;
    transition: all 0.3s ease-in-out;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }

    @media (min-width: 1024px) {
      font-size: 0;
      visibility: hidden;
      width: 0%;
    }
  }

  &:hover {
    h2 {
      @media (min-width: 1024px) {
        width: 40%;
        visibility: visible;
        font-size: 1.5rem;
      }
    }
  }
`;

export default RecipeTypes;
