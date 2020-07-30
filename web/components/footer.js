import React, { useContext } from "react";
import Link from "next/link";
import styled from "styled-components";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";
import ModalContext from "../lib/modalContext";
import FooterInputContext from "../lib/footerInputContext";
import TelegramIcon from "@material-ui/icons/Telegram";
import Logo from "./logo";

const Footer = () => {
  // Push any state changes with useContext
  const { setDisplay } = useContext(ModalContext);
  const { setFooterInput } = useContext(FooterInputContext);

  // Display modal on form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisplay(true);
  };

  return (
    <>
      <div className="flex flex-col absolute bottom-0 w-full">
        <div className="flex flex-col items-center w-full bg-lightPink relative z-10 space-y-4 md:space-y-5">
          <StyledBackground className="bg-lightPink z-0" />
          <div className="relative z-10 flex flex-col md:flex-row items-center md:space-x-5 mt-4 m-2">
            <p className="font-script text-big md:text-vbig">Subscribe!</p>
            <form
              onSubmit={handleSubmit}
              className="flex items-center h-12 bg-blue py-2 px-2 "
            >
              <input
                onChange={(e) => setFooterInput(e.target.value)}
                className="p-1 md:p-2 text-xl text-black w-64 md:w-72 h-full"
                placeholder="Email"
              />
              <button type="submit" className="ml-2 font-bold text-white">
                <TelegramIcon
                  fontSize="large"
                  className="text-white hover:text-lightPink"
                />
              </button>
            </form>
          </div>
          <hr className="relative z-10 w-full" />
          <div className="relative z-10 flex items-center">
            <Link href="/about">
              <a
                href="/about"
                className="font-sans hover:text-blackT uppercase px-2 md:px-5 text-xl"
              >
                Our Story
              </a>
            </Link>
            <Link href="/recipes">
              <a
                href="/recipes"
                className="hidden md:block font-sans hover:text-blackT uppercase px-2 md:px-5 text-xl mr-2 md:mr-5"
              >
                Recipes
              </a>
            </Link>
            <Link href="/community">
              <a
                href="/community"
                className="hidden md:block font-sans hover:text-blackT uppercase px-2 md:px-5 text-xl mr-2 md:mr-5"
              >
                Community
              </a>
            </Link>
            <Link href="/contact">
              <a
                href="/contact"
                className="font-sans hover:text-blackT uppercase px-2 md:px-5 text-xl mr-2 md:mr-5"
              >
                Contact us
              </a>
            </Link>
          </div>
          <hr className="relative z-10 w-full" />
          <SocialNav className="relative z-10 space-x-5">
            <a href="https://www.facebook.com/veggiessimo/">
              <FacebookIcon className="icon hover:text-facebook mb-4" />
            </a>
            <a href="https://www.instagram.com/veggiessimo.au/">
              <InstagramIcon className="icon hover:text-instagram mb-4" />
            </a>
            <a href="https://www.pinterest.com.au/veggiessimorecipes/">
              <PinterestIcon className="icon hover:text-pinterest mb-4" />
            </a>
          </SocialNav>
        </div>
        <div className="relative w-100 bg-green">
          <StyledBackground className="bg-green z-0" />
          <div className="relative z-10 font-sans self-end m-1 md:m-4 text-xs md:text-base font-bold flex">
            &#169; 2020 Veggiessimo AU. All rights reserved
            <span className="hidden md:block">
              . Site by{" "}
              <a href="https://harry-warner.co.uk" className="underline">
                Harry Warner
              </a>
              .
            </span>
          </div>
          <Link href="/">
            <a>
              <Logo footer />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

const StyledBackground = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  @media (min-width: 40rem) {
    left: calc(((100vw - 40rem) / 2) * -1);
  }
  @media (min-width: 48rem) {
    left: calc(((100vw - 48rem) / 2) * -1);
  }
  @media (min-width: 64rem) {
    left: calc(((100vw - 64rem) / 2) * -1);
  }
`;

const SocialNav = styled.div`
  display: flex;
  align-items: center;

  .icon {
    height: 2.5rem;
    width: 2.5rem;
  }
`;

export default Footer;
