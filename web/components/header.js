import styled from "styled-components";
import colors from "../styled/colors";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <StyledHeader>
      <Logo src={logo} />
      <ToggleBtn>
        <MenuIcon className="icon" />
      </ToggleBtn>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 100%;
  height: 30px;
  background: ${colors.green};
  position: fixed;
  display: flex;
  margin: 0;
`;

const Logo = styled.img`
  display: block;
  margin-left: 10px;
  width: 42px;
  height: 60px;
`;

const ToggleBtn = styled.div`
  width: 30px;
  height: 30px;
  background: ${colors.green};

  .icon {
    padding-top: 5px;
    height: 85%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }
`;

export default Header;
