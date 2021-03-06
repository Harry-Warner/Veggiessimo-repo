import React, { useState } from "react";
import Link from "next/link";
import ToggleIcon from "./toggleicon";
import ToggleMenu from "./togglemenu";
import styled from "styled-components";
import Headroom from "react-headroom";
import garlic from "../images/garlic.png";
import Logo from "../components/logo";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="z-50 relative">
        <Headroom className="lg:hidden">
          <div className="z-10 relative top-0 left-0 px-1 w-full h-12 md:h-16 bg-green">
            <div className="z-20">
              <Link href="/">
                <a href="/">
                  <Logo />
                </a>
              </Link>
            </div>
            <ToggleIcon open={open} setOpen={setOpen} />
            <ToggleMenu open={open} setOpen={setOpen} />
          </div>
        </Headroom>
        <StyledHeader className="top-0 z-40 left-0 px-1 lg:pl-12 w-full h-12 bg-green hidden lg:block fixed">
          <div>
            <Link href="/">
              <a href="/">
                <Logo />
              </a>
            </Link>
          </div>
          <div className="relative z-0 mx-auto h-full w-full flex justify-around sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg">
            <StyledLink>
              <Link href="/">
                <a href="/" className="flex w-full">
                  <img className="garlic" src={garlic} alt="vegetable" />
                  home
                </a>
              </Link>
            </StyledLink>
            <StyledLink>
              <Link href="/about">
                <a href="/about" className="flex w-full">
                  <img className="garlic" src={garlic} alt="vegetable" />
                  about
                </a>
              </Link>
            </StyledLink>
            <StyledLink>
              <Link href="/recipes">
                <a
                  href="/recipes"
                  className="relative z-10 bg-green flex w-full"
                >
                  <img className="garlic" src={garlic} alt="vegetable" />
                  recipes
                </a>
              </Link>
            </StyledLink>
            <StyledLink>
              <Link href="/community">
                <a href="/community" className="flex w-full">
                  <img className="garlic" src={garlic} alt="vegetable" />
                  community
                </a>
              </Link>
            </StyledLink>
            <StyledLink>
              <Link href="/contact">
                <a href="/contact" className="flex w-full">
                  <img className="garlic" src={garlic} alt="vegetable" />
                  contact
                </a>
              </Link>
            </StyledLink>
          </div>
        </StyledHeader>
      </div>
    </>
  );
};

const StyledHeader = styled.div`
  @media (width: 64rem) {
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
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  font-family: "fira-sans";
  padding-right: 2.86125rem;

  .garlic {
    padding: 0 1rem;
    height: 1.5625rem;
    align-self: center;
    transform: rotate(0);
    transition: all 0.3s ease-in-out;
  }

  .courses {
    width: calc(100% + 3.125rem);
    line-height: 0.75rem;
    top: -18.75rem;
    padding-left: 0.3125;
    transition: all 0.3s ease-in-out;
    font-size: 0.875rem;
    a {
      width: 100%;
      padding: 0.625rem;
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
