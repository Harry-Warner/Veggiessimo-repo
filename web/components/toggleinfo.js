import React from "react";
import { bool, func } from "prop-types";
import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Colors from "../styled/colors";

const ToggleInfo = ({ open, setOpen }) => {
  return (
    <StyledInfo open={open} onClick={() => setOpen(!open)}>
      <ExpandMoreIcon fontSize="large" />
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
  border-radius: 50%;
  margin: 40px 0 10px 40px;
  background: ${Colors.lightBlueT};
  transition: all 0.3s linear;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0)")};
`;

export default ToggleInfo;
