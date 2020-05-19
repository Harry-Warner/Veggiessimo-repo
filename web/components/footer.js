import React from "react";
import styled from "styled-components";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PinterestIcon from "@material-ui/icons/Pinterest";

const Footer = () => {
  return (
    <div className="flex flex-col absolute bottom-0 w-full">
      <div className="flex justify-between w-full bg-lightPink">
        <StyledContact className="pb-3 m-2">
          <p className="font-script text-xl md:text-vbig">Join us!</p>
          <form className="flex items-center h-6 md:h-12 lg:h-12 sm:h-8 bg-blue py-1 md:py-2 px-1 md:px-2 rounded">
            <input
              className="p-1 md:p-2 text-xs md:text-xl text-black w-24 md:w-48 lg:w-64 h-full rounded"
              placeholder="Email"
            />
            <button className="ml-1 md:ml-3 text-base md:text-big font-bold text-white">
              @
            </button>
          </form>
        </StyledContact>
        <StyledNav>
          <p className="font-sans uppercase px-2 md:px-5 text-xs md:text-xxl">
            Our Story
          </p>
          <p className="font-sans uppercase px-2 md:px-5 text-xs md:text-xxl mr-2 md:mr-5">
            Contact us
          </p>
        </StyledNav>
      </div>
      <div className="relative w-100 bg-green">
        <SocialNav className="ml-1">
          <FacebookIcon className="icon m-1" />
          <a href="https://www.instagram.com/veggiessimo.au/">
            <InstagramIcon className="icon m-1" />
          </a>
          <YouTubeIcon className="icon m-1" />
          <PinterestIcon className="icon m-1" />
          <p className="font-sans uppercase self-end m-1 md:m-4 text-xxs md:text-sm">
            @ 2020 Veggiessimo. made in australia
          </p>
        </SocialNav>
        <a href="/index">
          <img
            alt="Veggiessimo logo"
            className="absolute right-0 bottom-0 h-12 md:h-24 mx-2 mb-1"
            src="images/logo.png"
          />
        </a>
      </div>
    </div>
  );
};

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const StyledNav = styled.div`
  display: flex;
  align-items: center;
`;

const SocialNav = styled.div`
  display: flex;
  align-items: center;

  .icon {
    width: 1.375rem;
    margin: 0.25rem 0.125rem;

    @media (min-width: 768px) {
      height: 2.5rem;
      width: 2.5rem;
      margin: 0.75rem 0.25rem;
    }
  }
`;

export default Footer;
