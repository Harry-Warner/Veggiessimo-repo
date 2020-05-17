import styled from "styled-components";
import logo from "../images/logo.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  return (
    <div className="flex flex-col absolute bottom-0 w-full">
      <div className="flex justify-between w-full bg-lightPink">
        <StyledContact className="pb-3 sm:pb-6 m-2 sm:m-4">
          <p className="font-script text-xl">Join us!</p>
          <form className="flex items-center h-6 sm:h-8 bg-blue py-1 px-1 rounded">
            <input
              className="px-1 py-1 text-xs text-gray-700 w-24 sm:w-40 h-full rounded"
              placeholder="Email"
            />
            <button className="ml-1 text-md text-white font-bold focus:outline-none">
              @
            </button>
          </form>
        </StyledContact>
        <StyledNav>
          <p className="font-sans uppercase px-2 text-xs">Our Story</p>
          <p className="font-sans uppercase px-2 text-xs mr-2">Contact us</p>
        </StyledNav>
      </div>
      <div className="relative w-100 bg-green">
        <SocialNav className="ml-1">
          <FacebookIcon className="icon m-1" />
          <InstagramIcon className="icon m-1" />
          <TwitterIcon className="icon m-1" />
          <YouTubeIcon className="icon m-1" />
          <p className="font-sans uppercase self-end m-1 text-xxs">
            @ 2020 Veggiessimo. made in australia
          </p>
        </SocialNav>
        <img className="absolute right-0 bottom-0 h-12 mx-2 mb-1" src={logo} />
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
  }
`;

export default Footer;
