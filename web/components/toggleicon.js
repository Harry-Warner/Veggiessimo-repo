import React from "react";
import { bool, func } from "prop-types";
import styled from "styled-components";
import Colors from "../styled/colors";

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
  top: 0.25rem;
  right: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5rem;
  height: 2.5rem;
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
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

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

  @media (min-width: 768px) {
    top: 0.5rem;
    right: 0.5rem;
  }
`;

export default ToggleIcon;
