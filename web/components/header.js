import React, { useState } from "react";
import ToggleIcon from "./toggleicon";
import ToggleMenu from "./togglemenu";
import styled from "styled-components";
import Headroom from "react-headroom";
import garlic from "../images/garlic.png";

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
        <div className="top-0 z-40 left-0 px-1 w-full h-12 bg-green hidden lg:block fixed">
          <div className="mx-auto h-full w-full flex justify-around sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg">
            <Link href="/">
              <img className="garlic" src={garlic} alt="garlic" />
              home
              <img className="garlic" src={garlic} alt="garlic" />
            </Link>
            <Link href="/about">
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
