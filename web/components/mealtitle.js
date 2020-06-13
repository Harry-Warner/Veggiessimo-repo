import React from "react";
import styled from "styled-components";

const MealTitle = (props) => {
  return (
    <StyledTitle className="w-9/12 md:w-7/12 lg:w-6/12 md:h-32 lg:h-32 mx-auto text-center mt-6 lg:mt-16 flex justify-center items-center">
      <h1 className="text-big md:text-huge font-script">{props.title}</h1>
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  background-image: url("/images/mealbrush640.png");
  background-size: cover;
  background-position: center;

  @media (max-width: 640px) {
    height: 22vw;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    background-image: url("/images/mealbrush768.png");
  }
  @media (min-width: 1024px) {
    background-image: url("/images/mealbrush1024.png");
  }
`;

export default MealTitle;
