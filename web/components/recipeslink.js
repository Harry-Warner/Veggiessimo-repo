import React from "react";
import styled from "styled-components";

const RecipesLink = () => {
  return (
    <PaintSwipe className="w-full h-12 flex bg-cover">
      <Title1 className="text-big leading-10">Recipes</Title1>
      <Title2 className="text-xxs leading-10 pt-4">DIG IN</Title2>
    </PaintSwipe>
  );
};

const PaintSwipe = styled.div`
  margin-top: 10px;
  margin-left: -15px;
  background-image: url("/images/brush-stroke2.png");
  background-position: 0% 42%;
`;

const Title1 = styled.h1`
  margin-left: 25px;
  font-family: "playlist-script";
`;

const Title2 = styled.p`
  margin-left: 5px;
  font-family: "Fira Sans", sans-serif;
`;

export default RecipesLink;
