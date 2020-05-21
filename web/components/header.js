import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Headroom from "react-headroom";
import garlic from "../images/garlic.png";

const Header = () => {
  const [toggled, toggle] = useState(false);
  return (
    <>
      <div className="z-50 relative">
        <Headroom className="lg:hidden">
          <div className="z-10 relative top-0 left-0 px-1 w-full h-12 md:h-16 bg-green">
            <div className="mx-auto h-full w-full flex justify-between sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg">
              <a href="/index">
                <Logo
                  className="h-16 px-2 md:h-20"
                  src="../images/logo.png"
                  alt="logo"
                />
              </a>
              <img
                alt="toggle"
                className="w-10 md:w-12 h-10 md:h-12 self-center cursor-pointer mx-4 py-2"
                src="../images/toggle-icon.png"
                onClick={() => toggle((toggled) => !toggled)}
              />
            </div>
          </div>
          <div className="w-screen flex justify-center">
            {toggled && (
              <div className="mx-auto block fixed bg-green h-56 md:h-72 w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg transition-all duration-300 ease-in-out">
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
        </Headroom>
        <div className="top-0 z-40 left-0 px-1 w-full h-12 bg-green hidden lg:block fixed">
          <div className="mx-auto h-full w-full flex justify-around sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg">
            <Link href="/">
              <img className="garlic" src={garlic} alt="garlic" />
              home
              <img className="garlic" src={garlic} alt="garlic" />
            </Link>
            <Link href="#">
              <img className="garlic" src={garlic} alt="garlic" />
              about
              <img className="garlic" src={garlic} alt="garlic" />
            </Link>
            <Link href="/recipes">
              <img className="garlic" src={garlic} alt="garlic" />
              recipes
              <img className="garlic" src={garlic} alt="garlic" />
            </Link>
            <Link href="#">
              <img className="garlic" src={garlic} alt="garlic" />
              community
              <img className="garlic" src={garlic} alt="garlic" />
            </Link>
            <Link href="#">
              <img className="garlic" src={garlic} alt="garlic" />
              contact
              <img className="garlic" src={garlic} alt="garlic" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const Logo = styled.img`
  z-index: 50;
`;

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

const Link = styled.a`
  height: 100%;
  line-height: 3rem;
  text-transform: uppercase;
  font-size: 17.5px;
  display: flex;
  justify-content: space-between;
  font-family: "Fira Sans", sans-serif;

  .garlic {
    visibility: hidden;
    padding: 0 30px;
    height: 25px;
    align-self: center;
  }

  &:hover {
    .garlic {
      visibility: visible;
    }
  }
`;

export default Header;
