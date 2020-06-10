import React from "react";
import styled from "styled-components";

const AboutLink = () => {
  return (
    <div className="pt-6 md:pt-12">
      <div className="flex relative justify-center items-center w-full mx-auto">
        <img
          className="w-full lg:hidden border-lightPink border-solid border-t-12 border-b-12 md:border-t-20 md:border-b-20"
          src="images/cwu768.png"
          alt="cooking"
        />
        <img
          className="w-full hidden lg:block border-lightPink border-solid border-16"
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
    </div>
  );
};

const TextBox = styled.a`
  width: fit-content;
  top: 6.5%;
  text-align: center;
  left: 4vw;
  h1 {
    font-size: 5.5vw;
  }

  h2 {
    font-size: 2.5vw;
  }

  @media (min-width: 768px) {
    left: 4%;
    h1 {
      font-size: 2.75rem;
    }

    h2 {
      font-size: 1.125rem;
    }
  }
  @media (min-width: 1024px) {
    left: 4.75%;
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 1.25rem;
    }
  }
`;

export default AboutLink;
