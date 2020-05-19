import React from "react";
import styled from "styled-components";

const CommunityLink = () => {
  return (
    <div className="block w-full">
      <SectionOne className="w-full h-48 md:h-96 lg:h-116 bg-cover bg-center">
        <p className="font-script text-big md:text-vbig lg:text-huge ml-2">
          Community
        </p>
        <Text1 className="text-xs md:text-lg lg:text-xxl text-center uppercase">
          Discover more in store
        </Text1>
      </SectionOne>
      <SectionTwo className="h-40 md:h-84 lg:h-96 flex justify-end items-center bg-cover bg-center">
        <p className="font-script text-center text-vbig md:text-vhuge leading-10 md:leading-16 mr-8 md:mr-16 lg:mr-24">
          Bon
          <br />
          Apetit!
        </p>
      </SectionTwo>
    </div>
  );
};

const SectionOne = styled.div`
  background-image: url("images/street19.jpg");
  display: grid;
  grid-template: 50% 50% / 50% 50%;
`;

const Text1 = styled.p`
  font-family: "Fira Sans", sans-serif;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;

const SectionTwo = styled.div`
  background-image: url("images/street29.jpg");
`;

export default CommunityLink;
