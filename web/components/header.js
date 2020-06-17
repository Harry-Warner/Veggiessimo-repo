import React, { useState } from "react";
import Link from "next/link";
import ToggleIcon from "./toggleicon";
import ToggleMenu from "./togglemenu";
import styled from "styled-components";
import Headroom from "react-headroom";
import garlic from "../images/garlic.png";
import Modal from "../components/modal";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState(false);

  return (
    <>
      <div className="z-50 relative">
        <Headroom className="lg:hidden">
          <div className="z-10 relative top-0 left-0 px-1 w-full h-12 md:h-16 bg-green">
            <div className="mx-auto h-full w-full flex justify-between sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg">
              <div className="z-20">
                <Link href="/">
                  <a>
                    <img
                      className="h-16 px-2 md:h-20"
                      src="../../images/logo.png"
                      alt="Veggiessimo logo - light pink mishapen tomato with a blue leaf atop. Across the middle of the logo is the text Meals + Love"
                    />
                  </a>
                </Link>
              </div>
              <ToggleIcon open={open} setOpen={setOpen} />
              <ToggleMenu open={open} setOpen={setOpen} />
            </div>
          </div>
        </Headroom>
        <StyledHeader className="top-0 z-40 left-0 px-1 w-full h-12 bg-green hidden lg:block fixed">
          <div>
            <Link href="/">
              <a>
                <img
                  className="absolute top-0 left-0 h-16 px-2"
                  src="../../images/logo.png"
                  alt="Veggiessimo logo - light pink mishapen tomato with a blue leaf atop. Across the middle of the logo is the text Meals + Love"
                />
              </a>
            </Link>
          </div>
          <div className="relative z-0 mx-auto h-full w-full flex justify-around sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg">
            <StyledLink>
              <Link href="/">
                <a className="flex w-full">
                  <img className="garlic" src={garlic} alt="garlic" />
                  home
                </a>
              </Link>
            </StyledLink>
            <StyledLink>
              <Link href="/about">
                <a className="flex w-full">
                  <img className="garlic" src={garlic} alt="garlic" />
                  about
                </a>
              </Link>
            </StyledLink>
            <StyledLink>
              <Link href="/recipes">
                <a className="relative z-10 bg-green flex w-full">
                  <img className="garlic" src={garlic} alt="garlic" />
                  recipes
                </a>
              </Link>
            </StyledLink>
            <StyledLink>
              <Link href="/community">
                <a className="flex w-full">
                  <img className="garlic" src={garlic} alt="garlic" />
                  community
                </a>
              </Link>
            </StyledLink>
            <StyledLink>
              <Link href="/contact">
                <a className="flex w-full">
                  <img className="garlic" src={garlic} alt="garlic" />
                  contact
                </a>
              </Link>
            </StyledLink>
          </div>
        </StyledHeader>
      </div>

      <Modal display={display} setDisplay={setDisplay} />
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

const StyledLink = styled.div`
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
    .courses {
      top: 0;
    }
  }
`;

export default Header;
