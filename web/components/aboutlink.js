import React from "react";
import styled from "styled-components";

const AboutLink = () => {
  return (
    <div className="flex relative justify-end items-center w-full h-auto mt-6 md:mt-12">
      <img
        className="w-11/12 self-center justify-end m-4 mr-2 block md:hidden border-10 border-solid border-lightPinkT"
        src="images/cwuph640.png"
        alt="Cooking"
      />
      <img
        className="w-10/12 self-center justify-end m-10 hidden md:block lg:hidden border-16 border-solid border-lightPinkT"
        src="images/cwuph768.png"
        alt="Cooking"
      />
      <img
        className="w-9/12 self-center justify-end m-16 hidden lg:block border-16 border-solid border-lightPinkT"
        src="images/cwuph1024.png"
        alt="Cooking"
      />
      <div className="hidden lg:block w-9/12 h-132 absolute top-0 right-0 mt-8 mr-8 border-12 border-solid border-lightPinkT" />
      <TextBox
        href="/about"
        className="w-32 h-28 md:w-56 md:h-52 lg:w-72 lg:h-68 left-0 mx-2 md:mx-8 lg:mx-10 flex items-center justify-center absolute bg-lightPink"
      >
        <Text1 className="line text-xxl md:text-vbig lg:text-huge w-full">
          Cook with us
        </Text1>
        <Text2 className="line text-xxs md:text-lg lg:text-xxl w-full pb-4">
          FIND OUT MORE
        </Text2>
      </TextBox>
    </div>
  );
};

const TextBox = styled.a`
  display: flex;
  flex-direction: column;
  top: -5%;
`;

const Text1 = styled.div`
  font-family: "playlist-script";
  text-align: center;
`;

const Text2 = styled.div`
  font-family: "Fira Sans", sans-serif;
  text-align: center;
`;

export default AboutLink;
