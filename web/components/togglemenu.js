import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { bool, func } from "prop-types";

const ToggleMenu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open} className="bg-green py-12 md:py-16 z-10 md:px-16">
      <div>
        <h3 className="text-sm md:text-xxl font-bold border-b py-2">
          Navigation
        </h3>
        <Link href="/">
          <a href="/" open={open} onClick={() => setOpen(!open)}>
            Home
          </a>
        </Link>
        <Link href="/about">
          <a href="/about" open={open} onClick={() => setOpen(!open)}>
            About
          </a>
        </Link>
        <Link href="/recipes">
          <a href="/recipes" open={open} onClick={() => setOpen(!open)}>
            Recipes
          </a>
        </Link>
        <Link href="/community">
          <a href="/community" open={open} onClick={() => setOpen(!open)}>
            Community
          </a>
        </Link>
        <Link href="/contact">
          <a href="/contact" open={open} onClick={() => setOpen(!open)}>
            Contact
          </a>
        </Link>
      </div>
      <div>
        <h3 className="text-sm md:text-xxl font-bold border-b py-2">Social</h3>
        <a href="https://www.instagram.com/veggiessimo.au/">Instagram</a>
        <a href="https://www.facebook.com/veggiessimo/">Facebook</a>
        <a href="https://www.pinterest.com.au/veggiessimorecipes/">Pinterest</a>
      </div>
    </StyledMenu>
  );
};

ToggleMenu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
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

  @media (min-width: 48rem) {
    flex-direction: row;
    height: fit-content;

    a {
      font-size: 1.75rem;
      letter-spacing: 0.5rem;
      padding: 1.25rem 0;
    }
  }
`;

export default ToggleMenu;
