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
                  src="../images/logo.png"
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
              src="../images/logo.png"
              alt="logo"
            />
          </a>
          <div className="mx-auto h-full w-full flex justify-around sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg">
            <Link href="/">
              <img className="garlic" src={garlic} alt="garlic" />
              home
            </Link>
            <Link href="/about">
              <img className="garlic" src={garlic} alt="garlic" />
              about
            </Link>
            <Link href="/recipes">
              <img className="garlic" src={garlic} alt="garlic" />
              recipes
              <div className="courses flex flex-col absolute w-full top-0 mt-12 justify-around items-start bg-green">
                <a href="/breakfast">Breakfast</a>
                <a href="/mains">Mains</a>
                <a href="/dessert">Dessert</a>
              </div>
            </Link>
            <Link href="#">
              <img className="garlic" src={garlic} alt="garlic" />
              community
            </Link>
            <Link href="#">
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

  .courses {
    line-height: 0.75rem;
    visibility: hidden;
    padding-left: 35.78px;
    height: 0;
    transition: all 0.3s ease-in-out;
    font-size: 0;
    a {
      width: 100%;
      padding: 10px;
    }
  }

  &:hover {
    .garlic {
      transform: rotate(90deg);
    }
    .courses {
      visibility: visible;
      height: 100px;
      font-size: 0.875rem;
    }
  }
`;

export default Header;
