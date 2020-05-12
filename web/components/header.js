import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <Logo></Logo>
      <ToggleBtn></ToggleBtn>
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
  background: black;
  margin: 0 10px;
`;

export default Header;
