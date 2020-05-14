import styled from "styled-components";
import Colors from "../styled/colors";

const NavBar = () => {
  return (
    <Section>
      <StyledNavbar>
        <a href="#" className="item">
          ABOUT
        </a>
        <a href="#" className="item">
          RECIPES
        </a>
        <a href="#" className="item">
          COMMUNITY
        </a>
        <a href="#" className="item">
          CONTACT
        </a>
      </StyledNavbar>
    </Section>
  );
};

const Section = styled.div`
  width: 100vw;
  display: block;
  height: 50px;
  background: white;
`;

const StyledNavbar = styled.div`
  width: 85%;
  display: flex;
  height: 100%;
  margin: 0 auto;

  .item {
    margin: 0 auto;
    height: 100%;
    line-height: 50px;
    color: ${Colors.black};
    font-size: 12.5px;
    padding: 0 10px;
    font-family: "Fira Sans", sans-serif;

    &:hover {
      background-color: ${Colors.lightPink};
    }
  }
`;

export default NavBar;
