import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Header = () => {
  const [toggled, toggle] = useState(false);
  return (
    <>
      <div className="top-0 z-50 left-0 px-1 w-full h-8 md:h-12 bg-green fixed">
        <div className="mx-auto h-full w-full flex justify-between sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg">
          <a href="/index">
            <img className="h-12 md:h-20" src="images/logo.png" alt="logo" />
          </a>
          <img
            alt="toggle"
            className="w-6 md:w-10 py-2 h-full self-center cursor-pointer"
            src="images/toggle-icon.png"
            onClick={() => toggle((toggled) => !toggled)}
          />
        </div>
      </div>
      <div>
        {toggled && (
          <div className="mx-auto md:mt-3 block fixed z-10 bg-green h-56 md:h-72 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg transition-all duration-300 ease-in-out">
            <StyledMenu className="grid w-9/12 h-full mx-auto">
              <h1 className="text text-sm md:text-lg font-bold border-b">
                Navigation
              </h1>
              <h1 className="text text-sm md:text-lg font-bold border-b">
                Social
              </h1>
              <a href="/index" className="text sub text-xs">
                Home
              </a>
              <a
                href="https://www.instagram.com/veggiessimo.au/"
                className="text sub text-xs"
              >
                Instagram
              </a>
              <a href="#" className="text sub text-xs">
                About
              </a>
              <a href="#" className="text sub text-xs">
                Facebook
              </a>
              <a href="/recipes" className="text sub text-xs">
                Recipes
              </a>
              <a href="#" className="text sub text-xs">
                Pinterest
              </a>
              <a href="#" className="text sub text-xs">
                Community
              </a>
              <a href="#" className="text sub text-xs">
                Youtube
              </a>
              <a href="#" className="text sub text-xs">
                Contact
              </a>
            </StyledMenu>
          </div>
        )}
      </div>
    </>
  );
};

const StyledMenu = styled.div`
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto-fill, 2rem);

  .text {
    text-align: center;
    line-height: 2rem;
    font-family: "Fira Sans", sans-serif;
    text-transform: uppercase;
  }

  .sub {
    &:hover {
      background-color: rgba(0, 0, 0, 0.25);
    }
  }

  @media (min-width: 768px) {
    grid-template-rows: repeat(auto-fill, 3rem);
    .text {
      line-height: 3rem;
    }
    .sub {
      font-size: 1rem;
    }
  }
`;

export default Header;
