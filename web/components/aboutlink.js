import React from "react";
import styled from "styled-components";
import cwuph640 from "../images/cwuph640.png";
import cwuph768 from "../images/cwuph768.png";
import cwuph1024 from "../images/cwuph1024.png";

const AboutLink = () => {
  return (
    <div className="flex relative justify-end items-center w-full h-auto">
      <img
        className="w-2/3 self-center justify-end m-4 block md:hidden"
        src={cwuph640}
        alt="Cooking"
      />
      <img
        className="w-2/3 self-center justify-end m-10 hidden md:block lg:hidden"
        src={cwuph768}
        alt="Cooking"
      />
      <img
        className="w-2/3 self-center justify-end m-16 hidden lg:block"
        src={cwuph1024}
        alt="Cooking"
      />
      <div className="hidden lg:block w-2/3 h-116 absolute bottom-0 right-0 mb-8 mr-8 border-12 border-solid border-lightPinkT" />
      <TextBox className="w-32 h-28 md:w-56 md:h-52 lg:w-72 lg:h-68 left-0 mx-4 md:mx-10 lg:mx-16 flex items-center justify-center absolute bg-lightPinkT">
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

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
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
