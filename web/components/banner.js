import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <StyledBanner className="relative">
      <div className="absolute">
        <picture className="w-full">
          <source
            media="(min-width: 48rem) and (max-width: 63rem)"
            srcSet={require("../images/banner768.png")}
          />
          <source
            media="(min-width: 64rem)"
            srcSet={require("../images/bannerFULL.png")}
          />
          <img
            src={require("../images/banner640.png")}
            alt="A range of vegetarian, vegan, gluten free recipes created by Milly and Maria from combining french, argentinian and world cuisine. Together, with ideas on how to live a sustainable lifestyle this website aims at helping you eat healthy while saving the planet."
          />
        </picture>
        <Title className="hidden lg:block w-full absolute text-center font-script">
          Veggiessimo
        </Title>
        <Text1 className="hidden lg:block absolute font-sans uppercase">
          Meals + love
        </Text1>
      </div>
    </StyledBanner>
  );
};

const StyledBanner = styled.div`
  height: 65vw;
  div {
    width: 100vw;
    img {
      width: 100%;
    }
    @media (min-width: 40rem) {
      left: calc(((100vw - 40rem) / 2) * -1);
    }
    @media (min-width: 48rem) {
      left: calc(((100vw - 48rem) / 2) * -1);
    }
    @media (min-width: 64rem) {
      top: 3rem;
      left: calc(((100vw - 64rem) / 2) * -1);
    }
  }
  @media (min-width: 48rem) {
    height: 52.5vw;
  }
  @media (min-width: 64rem) {
    height: 27vw;
  }
`;

const Title = styled.h1`
  top: 25%;
  font-size: 9vw;
`;

const Text1 = styled.h2`
  top: 70%;
  left: 55%;
  font-size: 2vw;
`;

export default Banner;
