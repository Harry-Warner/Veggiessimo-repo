import React from "react";
import Link from "next/link";
import styled from "styled-components";
import MealTitle from "./mealtitle";

const RecipeTypes = () => {
  return (
    <>
      <MealTitle title="Which Meal?" />
      <div className="w-full grid grid-cols-2 md:grid-cols-3 justify-center">
        <StyledLink className="relative mx-auto cursor-pointer">
          <Link href="/breakfast">
            <a>
              <img
                className="h-28 md:h-40 lg:h-56 my-4"
                src="images/breakfast.png"
                alt="Scrambled egg sandwich with fresh seeded bread, red onion, tomatos and avacado"
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
                src="images/mains.png"
                alt="Black bean dahl with naan bread topped with pomegranate and coriander"
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
                src="images/desserts.png"
                alt="Berry lemon cheesecake"
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
                src="images/smallbites.png"
                alt="Vegetable chinese dumplings dipped in soya sauce sprinkled with chilli slices, sesame seeds and chopped coriander. Chopsticks on the side"
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
                src="images/salads.png"
                alt="Rocket, goats cheese, tomato, mango, red onion, cucumber and jalopeno salad sprinkled with pomegranate coriander leaves and chive flowers"
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
                src="images/sauces.png"
                alt="an assortment of homemade sauces on a kitchen table"
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
