import React from "react";
import styled from "styled-components";

const AboutLink = () => {
  return (
    <div className="flex relative justify-center items-center w-full mx-auto mt-6 md:mt-12">
      <img className="w-full lg:hidden" src="images/cwu768.png" alt="cooking" />
      <img
        className="w-full hidden lg:block"
        src="images/cwu1024.png"
        alt="cooking"
      />
      <TextBox
        href="/about"
        className="flex flex-col items-center justify-center absolute"
      >
        <h1 className="font-script md:text-qbig lg:text-vbig w-full">
          Cook with us
        </h1>
        <h2 className="font-sans md:text-lg lg:text-xl w-full pb-4">
          FIND OUT MORE
        </h2>
      </TextBox>
    </div>
  );
};

const TextBox = styled.a`
  width: fit-content;
  top: 6.5%;
  left: 4%;
  text-align: center;

  @media (max-width: 640px) {
    left: 4vw;
    h1 {
      font-size: 5.5vw;
    }

    h2 {
      font-size: 2.5vw;
    }
  }
`;

export default AboutLink;
