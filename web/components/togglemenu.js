import React from "react";
import styled from "styled-components";
import { bool } from "prop-types";

const ToggleMenu = ({ open }) => {
  return (
    <StyledMenu open={open} className="bg-green py-12 md:py-16 z-10 md:px-16">
      <div>
        <h1 className="text-sm md:text-xxl font-bold border-b py-2">
          Navigation
        </h1>
        <a href="/index">Home</a>
        <a href="/about">About</a>
        <a href="/recipes">Recipes</a>
        <a href="#">Community</a>
        <a href="#">Contact</a>
      </div>
      <div>
        <h1 className="text-sm md:text-xxl font-bold border-b py-2">Social</h1>
        <a href="https://www.instagram.com/veggiessimo.au/">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">Pinterest</a>
        <a href="#">Youtube</a>
      </div>
    </StyledMenu>
  );
};

ToggleMenu.propTypes = {
  open: bool.isRequired,
};

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  height: 100vh;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  transition: transform 0.3s ease-in-out;

  div {
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: 0.25rem 0;
    width: 50%;
    margin: 0 auto;
  }

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 0.5rem 0;
    font-weight: bold;
    letter-spacing: 0.25rem;
    color: black;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    height: 60vh;

    a {
      font-size: 1.75rem;
      letter-spacing: 0.5rem;
      padding: 1.25rem 0;
    }
  }
`;

export default ToggleMenu;