// index.js
import React from "react";
import styled from "styled-components";
import RecipesLink from "../components/recipeslink";
import AboutLink from "../components/aboutlink";
import CommunityLink from "../components/communitylink";
import MetaTags from "../components/metatags";
import Banner from "../components/banner";
import SeeAll from "../components/seeAllButton";
import HomeRecipes from "../components/homeRecipes";

const Index = () => {
  return (
    <>
      <MetaTags
        description="Welcome to the Veggiessimo website. Delicious vegan, vegetarian and gluten free recipes, along with the best tips on living a sustainable lifestyle!"
        type="website"
        title="Veggiessimo - Meals + Love"
        url=""
        imageSrc="https://veggiessimo.com.au/images/cook-with-us-1-sm.png"
      />
      <Banner />
      <AboutLink />
      <SeeAll url="/about" text="More on our story" />
      <RecipesLink />
      <Recipes>
        <HomeRecipes
          title="tasty bites"
          recipe="Dumplings"
          image="/images/smallBites.jpg"
        />
        <HomeRecipes
          title="healthy meals"
          recipe="Blackbean Dahl"
          image="/images/healthyMealsHalf1.png"
        />
        <HomeRecipes
          title="satisfying sauces"
          recipe="Sweet & Sour"
          image="/images/sauces.jpg"
        />
        <SeeAll url="/recipes" text="See all Recipes!" />
      </Recipes>
      <CommunityLink />
      <SeeAll url="/community" text="step into sustainability" />
    </>
  );
};

const Recipes = styled.ul`
  width: 100%;
  margin: 0.625rem auto;
  display: flex;
  flex-direction: column;
`;

export default Index;
