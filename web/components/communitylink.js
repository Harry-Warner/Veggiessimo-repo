import React from "react";
import styled from "styled-components";

const CommunityLink = () => {
  return (
    <SectionWrapper className="w-full relative h-48 md:h-96 lg:h-116 mt-4 md:mt-8 lg:mt-10 bg-cover bg-center">
      <div className="bg-white relative w-full top-0">
        <img
          className="w-full h-56 md:hidden"
          src="images/onion640.png"
          alt="background"
        />
        <img
          className="w-full h-108 hidden md:block lg:hidden"
          src="images/onion768.png"
          alt="background"
        />
        <img
          className="w-full h-132 hidden lg:block"
          src="images/onion1024.png"
          alt="background"
        />
      </div>
      <h1 className="absolute font-script text-lightPink text-big md:text-huge lg:text-vhuge z-20">
        Community
      </h1>
      <p className="absolute font-sans text-lightPink uppercase text-xxs md:text-base lg:text-xl z-20 w-auto">
        Sustainable living
      </p>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  height: fit-content;
  display: flex;

  h1 {
    top: 32%;
    right: 10%;
  }

  p {
    bottom: 40%;
    right: 18.5%;

    @media (min-width: 768px) {
      right: 16.5%;
    }
  }
`;

export default CommunityLink;
