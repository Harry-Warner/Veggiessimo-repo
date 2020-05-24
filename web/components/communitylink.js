import React from "react";
import styled from "styled-components";

const CommunityLink = () => {
  return (
    <SectionWrapper className="w-full relative h-48 md:h-96 lg:h-116 mt-4 md:mt-8 lg:mt-10 bg-cover bg-center">
      <div className="bg-white absolute w-full top-0 mt-4 md:mt-8 lg:mt-12">
        <img
          className="w-full md:hidden"
          src="images/springonion.png"
          alt="background"
        />
        <img
          className="w-full hidden md:block lg:hidden"
          src="images/springonion.png"
          alt="background"
        />
        <img
          className="w-full hidden lg:block"
          src="images/springonion.png"
          alt="background"
        />
      </div>
      <img
        className="w-full z-10 md:hidden"
        src="images/com640brush.png"
        alt="banner"
      />
      <img
        className="w-full z-10 hidden md:block lg:hidden"
        src="images/com768brush.png"
        alt="banner"
      />
      <img
        className="w-full z-10 hidden lg:block"
        src="images/com768brush.png"
        alt="banner"
      />
      <h1 className="absolute font-script text-big md:text-huge lg:text-vhuge ml-2 z-20">
        Community
      </h1>
      <Text1 className="absolute z-20 font-sans text-xxs md:text-lg lg:text-xxl text-center uppercase">
        Sustainable lifestyle ideas
      </Text1>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  height: fit-content;
  display: flex;
`;

const Text1 = styled.p`
  top: 50%;
  right: 5%;

  @media (min-width: 400px) and (max-width: 700px) {
    font-size: 0.65rem;
  }
`;

export default CommunityLink;
