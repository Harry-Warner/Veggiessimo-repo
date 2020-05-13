import styled from "styled-components";
import toggle from "../images/toggleicon.png";

const Header = () => {
  return (
    <StyledHeader>
      <Logo></Logo>
      <ToggleBtn>
        <img className="icon" src={toggle} />
      </ToggleBtn>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 100%;
  height: 30px;
  background: green;
  position: fixed;
  display: flex;
  margin: 0;
`;

const Logo = styled.div`
  display: block;
  margin: 0 10px;
  width: 50px;
  height: 65px;
  background: grey;
`;

const ToggleBtn = styled.div`
  width: 30px;
  height: 30px;
  background: green;
  margin: 0 10px;

  .icon {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }
`;

export default Header;
