import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <StyledBanner className="relative">
      <div className="absolute">
        <img
          className="w-full md:hidden bg-white"
          src="images/banner640.png"
          alt="The veggiessimo banner for the website. a green paint brush swipe across the top and bottom with the company name scripted in the middle between two pencil drawings of vegetables"
        />
        <img
          className="w-full hidden md:block lg:hidden bg-white"
          src="images/banner768.png"
          alt="The veggiessimo banner for the website. a green paint brush swipe across the top and bottom with the company name scripted in the middle between two pencil drawings of vegetables"
        />
        <img
          className="w-full hidden lg:block bg-white mt-8"
          src="images/bannerFULL.png"
          alt="The veggiessimo banner for the website. a green paint brush swipe across the top and bottom with the company name scripted in the middle between two pencil drawings of vegetables"
        />
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
    @media (min-width: 40rem) {
      left: calc(((100vw - 40rem) / 2) * -1);
    }
    @media (min-width: 48rem) {
      left: calc(((100vw - 48rem) / 2) * -1);
    }
    @media (min-width: 64rem) {
      top: 1rem;
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
