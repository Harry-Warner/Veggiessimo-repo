import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Banner = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  console.log(0.26 * width);
  return (
    <StyledBanner width={width} className="relative">
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
  height: ${({ width }) => (width ? `${(0.65 * width) / 16}rem` : "16.5rem")};
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
    height: ${({ width }) => (width ? `${(0.54 * width) / 16}rem` : "16.5rem")};
  }
  @media (min-width: 64rem) {
    height: ${({ width }) => (width ? `${(0.26 * width) / 16}rem` : "16.5rem")};
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
