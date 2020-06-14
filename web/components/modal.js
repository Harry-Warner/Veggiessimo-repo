import React, { useEffect } from "react";
import styled from "styled-components";
import { bool, func } from "prop-types";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const Modal = ({ display, setDisplay }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledModal
      display={display}
      className="fixed z-50 flex justify-center items-center top-0 right-0 bottom-0 left-0"
    >
      <div
        onClick={() => setDisplay(false)}
        className="fixed z-0 top-0 right-0 bottom-0 left-0 bg-blackT"
      />
      <div className="fixed w-11/12 lg:w-200 md:h-108 p-2 md:p-4 flex flex-col md:flex-row bg-white">
        <StyledClose
          onClick={() => setDisplay(false)}
          className="absolute right-0"
        >
          <HighlightOffIcon style={{ fontSize: 20, color: "#efe1e8" }} />
        </StyledClose>
        <div className="relative z-0 w-full md:w-7/12 h-48 md:h-64 md:h-full bg-green">
          <img
            src="/images/logoPlain.png"
            alt="logo"
            className="h-full mx-auto"
          />
          <div className="w-full h-full absolute left-0 top-0 pt-12 md:pt-20 z-10 flex items-center justify-center">
            <h1 className="text-xl md:text-big text-center uppercase font-sans">
              Meals + Love
            </h1>
          </div>
        </div>
        <div className="mt-10 md:mt-0 relative flex flex-col w-full md:w-5/12 h-56 md:h-64 self-end">
          <div className="join md:my-2 absolute  z-10 w-full md:w-auto text-center lg:text-left font-script text-huge md:text-vvhuge">
            <h2>Join us!</h2>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="my-2 mx-auto w-full md:w-11/12 h-20 md:h-24 text-xxl px-2 bg-lightPink"
          />
          <button
            onClick={() => setDisplay(false)}
            type="submit"
            className="my-2 mx-auto w-full md:w-11/12 h-24 md:h-32 text-xxl md:text-xxxl font-bold uppercase bg-blue border-solid border-blue border-4 text-white hover:bg-white hover:text-blue"
          >
            Subscribe
          </button>
          <h3 className="my-2 w-full text-center font-script text-xxl md:text-big">
            Get exclusive access to the latest recipes!
          </h3>
        </div>
      </div>
    </StyledModal>
  );
};

Modal.propTypes = {
  display: bool.isRequired,
  setDisplay: func.isRequired,
};

const StyledModal = styled.div`
  display: ${({ display }) => (display ? "flex" : "none")};
  .join {
    top: -33%;
    @media (min-width: 768px) {
      top: -65%;
      left: -20%;
      transform: rotate(350deg);
    }
    @media (min-width: 1024px) {
      left: -15%;
    }
  }
`;

const StyledClose = styled.div`
  cursor: pointer;
  top: -23px;
  right: -8px;
  @media (min-width: 768px) {
    right: -15px;
    top: -20px;
  }
`;

export default Modal;
