import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Banner = () => {
  const [width, setWidth] = useState(
    window.innerWidth /
      parseFloat(getComputedStyle(document.querySelector("html"))["font-size"])
  );

  useEffect(() => {
    const handleWindowResize = () =>
      setWidth(
        window.innerWidth /
          parseFloat(
            getComputedStyle(document.querySelector("html"))["font-size"]
          )
      );
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  console.log(width);

  return (
    <StyledBanner width={width} className="relative">
      <div className="absolute">
        {width < 48 ? (
          <img
            className="w-full bg-white"
            src="images/banner640.png"
            alt="The veggiessimo banner for the website. a green paint brush swipe across the top and bottom with the company name scripted in the middle between two pencil drawings of vegetables"
          />
        ) : width < 64 ? (
          <img
            className="w-full bg-white"
            src="images/banner768.png"
            alt="The veggiessimo banner for the website. a green paint brush swipe across the top and bottom with the company name scripted in the middle between two pencil drawings of vegetables"
          />
        ) : (
          <img
            className="w-full bg-white mt-8"
            src="images/bannerFULL.png"
            alt="The veggiessimo banner for the website. a green paint brush swipe across the top and bottom with the company name scripted in the middle between two pencil drawings of vegetables"
          />
        )}
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
  height: ${({ width }) => (width ? `${0.65 * width}rem` : "15.25rem")};
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
    height: ${({ width }) => (width ? `${0.54 * width}rem` : "26rem")};
  }
  @media (min-width: 64rem) {
    height: ${({ width }) => (width ? `${0.26 * width}rem` : "16.65rem")};
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
