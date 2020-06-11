import React from "react";
import Link from "next/link";
import styled from "styled-components";

const AboutLink = () => {
  return (
    <div className="relative w-full pb-2 pl-2 md:pb-4 md:pl-4 my-4 md:my-6">
      <Border className="z-10 absolute bottom-0 left-0 border-solid border-2 md:border-4 border-blue" />
      <Link href="/about">
        <a className="pt-6 md:pt-12">
          <div className="z-0 flex relative justify-center items-center w-full mx-auto">
            <img
              className="w-full lg:hidden"
              src="images/cwu768.png"
              alt="cooking"
            />
            <img
              className="w-full hidden lg:block"
              src="images/cwu1024.png"
              alt="cooking"
            />
            <TextBox className="flex flex-col items-center justify-center absolute">
              <h1 className="font-script md:text-qbig lg:text-vbig w-full">
                Cook with us
              </h1>
              <h2 className="font-sans md:text-lg lg:text-xl w-full pb-4">
                FIND OUT MORE
              </h2>
            </TextBox>
          </div>
        </a>
      </Link>
    </div>
  );
};

const Border = styled.div`
  width: calc(100% - 0.5rem);
  height: calc(100% - 0.5rem);

  @media (min-width: 768px) {
    width: calc(100% - 1rem);
    height: calc(100% - 1rem);
  }
`;

const TextBox = styled.div`
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
    left: 3.5%;
    h1 {
      font-size: 2.75rem;
    }

    h2 {
      font-size: 1.125rem;
    }
  }
  @media (min-width: 1024px) {
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 1.25rem;
    }
  }
`;

export default AboutLink;
