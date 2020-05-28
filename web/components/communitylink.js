import React from "react";
import styled from "styled-components";

const CommunityLink = () => {
  return (
    <SectionWrapper className="flex justify-end items-center w-full relative h-48 md:h-96 lg:h-116 mt-4 md:mt-8 lg:mt-10 bg-cover bg-center">
      <div className="bg-white absolute w-full top-0">
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
      <img
        className="h-48 md:h-96 lg:h-124 z-10 mr-4"
        src="images/community-brush.png"
        alt="banner"
      />
      <h1 className="absolute pr-10 md:pr-16 lg:pr-20 pb-8 md:pb-12 lg:pb-16 font-script text-big md:text-huge lg:text-vhuge z-20">
        Community
      </h1>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  height: fit-content;
  display: flex;
`;

export default CommunityLink;
