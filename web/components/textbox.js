import React from "react";
import styled from "styled-components";
import Colors from "../styled/colors";

const TextBox = ({ text }) => {
  return (
    <StyledBox className="relative flex w-3/4 md:w-11/12 lg:w-full mx-auto justify-center bg-white mt-3 px-1">
      <p className="font-sans md:font-script self-center text-center mx-auto my-2 text-base md:text-lg lg:text-big">
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
  height: 3.625rem;
  .line {
    position: absolute;
    background: ${Colors.blue};
  }
  .right {
    height: calc(100% + 0.625rem);
    top: -0.3125rem;
    right: 0;
    width: 0.125rem;
  }
  .bottom {
    width: calc(100% + 1.25rem);
    left: -0.625rem;
    bottom: 0;
    height: 0.125rem;
  }
  .left {
    height: calc(100% + 0.625rem);
    top: -0.3125rem;
    left: 0;
    width: 0.125rem;
  }
  .top {
    width: calc(100% + 1.25rem);
    left: -0.625rem;
    top: 0;
    height: 0.125rem;
  }
  @media (min-width: 48rem) {
    height: 4.375rem;
  }
  @media (min-width: 64rem) {
    height: 7.75rem;
  }
`;

export default TextBox;
