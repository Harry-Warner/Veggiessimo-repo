import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Colors from "../styled/colors";

const AboutLink = () => {
  return (
    <div className="relative w-full pb-2 pl-2 md:pb-4 md:pl-4 my-4 md:my-6">
      <Border className="z-10 absolute bottom-0 left-0 border-solid border-2 md:border-4 border-blue" />
      <Link href="/about">
        <a className="pt-6 md:pt-12">
          <div className="z-0 flex relative justify-center items-center w-full mx-auto">
            <div className="z-10 w-full box-border overflow-hidden">
              <StyledHex>
                <div className="square" />
                <div className="tri" />
              </StyledHex>
              <StyledFigure>
                <img
                  className="w-1/4 float-left lg:hidden"
                  src="images/cook-with-us-1-sm.png"
                  alt="Milly and Maria chopping vegetables on a chopping board on the kitchen tops with bowls of fruit, avacados, ginger, garlic, seeds and many more fresh vegetables lying on the table next to them."
                />
                <img
                  className="w-1/4 float-left lg:hidden"
                  src="images/cook-with-us-2-sm.png"
                  alt="an assortment of ground spices, crushed nuts and seeds laying on the kitched tops, with bay leaves in between the spice bowls and a spoon sprinkling peanuts into the peanut bowl."
                />
                <img
                  className="w-1/4 float-left lg:hidden"
                  src="images/cook-with-us-3-sm.png"
                  alt="Marias hands finely dicing a red onion on a chopping board with a sliced lime placed on the corner of the chopping board."
                />
                <img
                  className="w-1/4 float-left lg:hidden"
                  src="images/cook-with-us-1-sm.png"
                  alt="Milly and Maria chopping vegetables on a chopping board on the kitchen tops with bowls of fruit, avacados, ginger, garlic, seeds and many more fresh vegetables lying on the table next to them."
                />
                <img
                  className="w-1/4 float-left hidden lg:block"
                  src="images/cook-with-us-1-lg.png"
                  alt="Milly and Maria chopping vegetables on a chopping board on the kitchen tops with bowls of fruit, avacados, ginger, garlic, seeds and many more fresh vegetables lying on the table next to them."
                />
                <img
                  className="w-1/4 float-left hidden lg:block"
                  src="images/cook-with-us-2-lg.png"
                  alt="an assortment of ground spices, crushed nuts and seeds laying on the kitched tops, with bay leaves in between the spice bowls and a spoon sprinkling peanuts into the peanut bowl."
                />
                <img
                  className="w-1/4 float-left hidden lg:block"
                  src="images/cook-with-us-3-lg.png"
                  alt="Marias hands finely dicing a red onion on a chopping board with a sliced lime placed on the corner of the chopping board."
                />
                <img
                  className="w-1/4 float-left hidden lg:block"
                  src="images/cook-with-us-1-lg.png"
                  alt="Milly and Maria chopping vegetables on a chopping board on the kitchen tops with bowls of fruit, avacados, ginger, garlic, seeds and many more fresh vegetables lying on the table next to them."
                />
              </StyledFigure>
            </div>
            <TextBox className="z-20 flex flex-col items-center justify-center absolute">
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

const StyledHex = styled.div`
  position: absolute;
  left: 0.45rem;
  z-index: 10;
  .square {
    width: 6.5rem;
    height: 3.75rem;
    background: ${Colors.lightPinkT};
  }
  .tri {
    position: absolute;
    top: 3.75rem;
    left: 0;
    width: 0;
    height: 0;
    border-left: 3.25rem solid transparent;
    border-right: 3.25rem solid transparent;
    border-top: 2.25rem solid ${Colors.lightPinkT};
  }
  @media (min-width: 48rem) {
    left: 0.875rem;
    .square {
      width: 14.5rem;
      height: 9rem;
      background: ${Colors.lightPinkT};
    }
    .tri {
      top: 9rem;
      border-left: 7.25rem solid transparent;
      border-right: 7.25rem solid transparent;
      border-top: 5rem solid ${Colors.lightPinkT};
    }
  }
  @media (min-width: 64rem) {
    left: 1.5rem;
    .square {
      width: 15.25rem;
      height: 10rem;
      background: ${Colors.lightPinkT};
    }
    .tri {
      top: 10rem;
      border-left: 7.625rem solid transparent;
      border-right: 7.625rem solid transparent;
      border-top: 5.625rem solid ${Colors.lightPinkT};
    }
  }
`;

const StyledFigure = styled.figure`
  position: relative;
  width: 400%;
  margin: 0;
  left: 0;
  text-align: left;
  font-size: 0;
  animation: 15s slidy infinite;

  @keyframes slidy {
    0% {
      left: 0%;
    }
    24% {
      left: 0%;
    }
    34% {
      left: -100%;
    }
    57% {
      left: -100%;
    }
    67% {
      left: -200%;
    }
    90% {
      left: -200%;
    }
    100% {
      left: -300%;
    }
  }
`;

const TextBox = styled.div`
  width: fit-content;
  top: 6.5%;
  text-align: center;
  left: 0.65rem;
  h1 {
    font-size: 1.3rem;
  }

  h2 {
    font-size: 0.5rem;
  }

  @media (min-width: 48rem) {
    left: 2.125rem;
    h1 {
      font-size: 2.75rem;
    }

    h2 {
      font-size: 1.125rem;
    }
  }
  @media (min-width: 64rem) {
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 1.25rem;
    }
  }
`;

export default AboutLink;
