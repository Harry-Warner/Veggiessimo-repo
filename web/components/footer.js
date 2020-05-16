import styled from "styled-components";
import colors from "../styled/colors";
import logo from "../images/logo.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  return (
    <StyledFooter>
      <SectionOne>
        <StyledContact>
          <p className="text">Join us!</p>
          <form className="form">
            <input className="input" placeholder="Email" />
            <button className="btn">@</button>
          </form>
        </StyledContact>
        <StyledNav>
          <p className="item">Our Story</p>
          <p className="item">Contact us</p>
        </StyledNav>
      </SectionOne>
      <SectionTwo>
        <SocialNav>
          <FacebookIcon className="icon" />
          <InstagramIcon className="icon" />
          <TwitterIcon className="icon" />
          <YouTubeIcon className="icon" />
          <p className="copyright">@ 2020 Veggiessimo. made in australia</p>
        </SocialNav>
        <Logo src={logo} />
      </SectionTwo>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 15vw;
  background: ${colors.lightPink};
`;

const SectionTwo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 8vw;
  background: ${colors.green};
`;

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 2vw;

  .text {
    font-family: "playlist-script";
    font-size: 5vw;
  }

  .form {
    background: ${colors.blue};
    padding: 1vw;
    border-radius: 1vw;
    display: flex;
  }

  .input {
    border-radius: 0.5vw;
    border: none;
    width: 20vw;
    height: 3.8vw;
    padding-top: 0.2vw;
    padding-left: 1vw;
    font-size: 2vw;
  }

  .btn {
    border-radius: 0.5vw;
    border: none;
    margin-left: 1vw;
    height: 4vw;
    line-height: 3.8vw;
    font-size: 3.8vw;
    background: ${colors.lightPink};
  }
`;

const StyledNav = styled.div`
  display: flex;
  align-items: center;

  .item {
    padding: 0 2vw;
    font-family: "Fira Sans", sans-serif;
    text-transform: uppercase;
    font-size: 3vw;
  }
`;

const SocialNav = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5vw;

  .icon {
    width: 5vw;
    height: 5vw;
    margin: 0 0.5vw;
  }

  .copyright {
    margin: 1.5vw;
    font-size: 2vw;
    align-self: flex-end;
    font-family: "Fira Sans", sans-serif;
    text-transform: uppercase;
  }
`;

const Logo = styled.img`
  margin: 0 2vw;
  width: 5vw;
  height: 8vw;
`;

export default Footer;
