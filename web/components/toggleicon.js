import React from "react";
import { bool, func } from "prop-types";
import styled from "styled-components";

const ToggleIcon = ({ open, setOpen }) => {
  return (
    <StyledIcon open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledIcon>
  );
};

ToggleIcon.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

const StyledIcon = styled.button`
  position: absolute;
  top: 0.45rem;
  right: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5rem;
  height: ${({ open }) => (open ? "2.5rem" : "2rem")};
  background: transparent;
  cursor: pointer;
  z-index: 20;

  &:focus {
    outline: none;
  }

  div {
    width: 2.5rem;
    height: 0.25rem;
    background: black;
    border-radius: 0.625rem;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 0.0625rem;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) =>
        open ? "translateX(-20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media (min-width: 48rem) {
    top: 0.875rem;
    right: 0.75rem;
  }
`;

export default ToggleIcon;
