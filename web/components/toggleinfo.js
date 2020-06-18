import React from "react";
import { bool, func } from "prop-types";
import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ToggleInfo = ({ open, setOpen }) => {
  return (
    <StyledInfo open={open}>
      <ExpandMoreIcon style={{ fontSize: "1.75rem" }} />
    </StyledInfo>
  );
};

ToggleInfo.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

const StyledInfo = styled.button`
  cursor: pointer;
  width: fit-content;
  transition: all 0.3s linear;
  transform: ${({ open }) => (open ? "rotateX(180deg)" : "rotateX(0)")};
`;

export default ToggleInfo;
