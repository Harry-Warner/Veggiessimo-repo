import React, { useState } from "react";
import ToggleIcon from "./toggleicon";
import ToggleMenu from "./togglemenu";
import styled from "styled-components";
import Headroom from "react-headroom";
import garlic from "../images/garlic.png";
import Colors from "../styled/colors";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="z-50 relative">
        <Headroom className="lg:hidden">
          <div className="z-10 relative top-0 left-0 px-1 w-full h-12 md:h-16 bg-green">
            <div className="mx-auto h-full w-full flex justify-between sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg">
              <a href="/index" className="z-20">
                <img
                  className="h-16 px-2 md:h-20"
                  src="../../images/logo.png"
                  alt="logo"
                />
              </a>
              <ToggleIcon open={open} setOpen={setOpen} />
              <ToggleMenu open={open} setOpen={setOpen} />
            </div>
          </div>
        </Headroom>
        <StyledHeader className="top-0 z-40 left-0 px-1 w-full h-12 bg-green hidden lg:block fixed">
          <a href="/index">
            <img
              className="absolute top-0 left-0 h-16 px-2"
              src="../../images/logo.png"
              alt="logo"
            />
          </a>
          <div className="relative z-0 mx-auto h-full w-full flex justify-around sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg">
            <Link href="/">
              <img className="garlic" src={garlic} alt="garlic" />
              home
            </Link>
            <Link href="/about">
              <img className="garlic" src={garlic} alt="garlic" />
              about
            </Link>
            <Link href="/recipes">
              <div className="relative z-10 bg-green flex w-full">
                <img className="garlic1" src={garlic} alt="garlic" />
                recipes
              </div>
              <div className="courses z-0 flex flex-col absolute mt-12 justify-around items-start bg-green">
                <a href="/breakfast" className="hover:font-bold">
                  - Breakfast
                </a>
                <a href="/mains" className="hover:font-bold">
                  - Mains
                </a>
                <a href="/dessert" className="hover:font-bold">
                  - Dessert
                </a>
                <a href="/smallbites" className="hover:font-bold">
                  - Small Bites
                </a>
                <a href="/salads" className="hover:font-bold">
                  - Salads
                </a>
                <a href="/sauces" className="hover:font-bold">
                  - Sauces
                </a>
              </div>
            </Link>
            <Link href="/community">
              <img className="garlic" src={garlic} alt="garlic" />
              community
            </Link>
            <Link href="/contact">
              <img className="garlic" src={garlic} alt="garlic" />
              contact
            </Link>
          </div>
        </StyledHeader>
      </div>
    </>
  );
};

const StyledHeader = styled.div`
  @media (width: 1024px) {
    display: flex;

    img {
      position: relative;
    }
  }
`;

const Link = styled.a`
  position: relative;
  height: 100%;
  line-height: 3rem;
  text-transform: uppercase;
  font-size: 17.5px;
  display: flex;
  justify-content: space-between;
  font-family: "Fira Sans", sans-serif;
  padding-right: 45.78px;

  .garlic {
    padding: 0 15px;
    height: 25px;
    align-self: center;
    transform: rotate(0);
    transition: all 0.3s ease-in-out;
  }
  .garlic1 {
    padding: 0 15px;
    height: 25px;
    align-self: center;
    transform: rotate(0);
    transition: all 0.3s ease-in-out;
  }

  .courses {
    width: calc(100% + 50px);
    line-height: 0.75rem;
    top: -300px;
    padding-left: 5px;
    transition: all 0.3s ease-in-out;
    font-size: 0.875rem;
    a {
      width: 100%;
      padding: 10px;
    }
  }

  &:hover {
    .garlic {
      transform: rotate(90deg);
    }
    .garlic1 {
      transform: rotate(180deg);
    }
    .courses {
      top: 0;
    }
  }
`;

export default Header;
