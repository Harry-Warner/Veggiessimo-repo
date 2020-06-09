import React from "react";
import styled from "styled-components";
import Colors from "../styled/colors";

const TextBox = ({ text }) => {
  return (
    <StyledBox className="relative flex w-3/4 md:w-11/12 lg:w-full mx-auto justify-center bg-white mt-3 px-1">
      <p className="font-sans md:font-script self-center text-center text-black mx-auto my-2 text-sm md:text-lg lg:text-big">
        {text}
      </p>
      <div className="line right" />
      <div className="line bottom" />
      <div className="line left" />
      <div className="line top" />
    </StyledBox>
  );
};

const StyledBox = styled.div`
  height: 58px;
  .line {
    position: absolute;
    background: ${Colors.blue};
  }
  .right {
    height: calc(100% + 10px);
    top: -5px;
    right: 0;
    width: 2px;
  }
  .bottom {
    width: calc(100% + 20px);
    left: -10px;
    bottom: 0;
    height: 2px;
  }
  .left {
    height: calc(100% + 10px);
    top: -5px;
    left: 0;
    width: 2px;
  }
  .top {
    width: calc(100% + 20px);
    left: -10px;
    top: 0;
    height: 2px;
  }
  @media (min-width: 768px) {
    height: 70px;
  }
  @media (min-width: 1024px) {
    height: 124px;
  }
`;

export default TextBox;
