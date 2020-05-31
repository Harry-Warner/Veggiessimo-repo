import React from "react";
import styled from "styled-components";
import Footer from "../components/footer";
import Container from "../styled/container";
import { Instagram } from "@styled-icons/entypo-social/Instagram";
import { Facebook } from "@styled-icons/entypo-social/Facebook";
import { PinterestWithCircle } from "@styled-icons/entypo-social/PinterestWithCircle";
import { Email } from "@styled-icons/material/Email";

const Contact = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col w-full mx-auto relative mt-8 md:mt-12 lg:mt-24">
          <img
            className="block md:hidden w-full z-0"
            src="images/contact640.png"
            alt="background"
          />
          <img
            className="hidden md:block lg:hidden w-full z-0"
            src="images/contact768.png"
            alt="background"
          />
          <img
            className="hidden lg:block w-full z-0"
            src="images/contact1024.png"
            alt="background"
          />
          <StyledTitle className="absolute text-big md:text-huge lg:text-vhuge font-script right-0 mr-4 md:mr-6 lg:mr-12 mt-6 md:mt-16">
            Get in Touch
          </StyledTitle>
          <StyledForm className="absolute self-center  justify-between flex flex-col md:items-end py-4">
            <input
              type="text"
              name="name"
              className="name w-68 lg:w-108 lg:h-12 my-2 pl-2 bg-lightPink border-solid border-lightBlue border-b-2"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              className="email w-68 lg:w-108 lg:h-12 my-2 pl-2 bg-lightPink border-solid border-lightBlue border-b-2"
              placeholder="Email"
            />
            <input
              type="text"
              name="subject"
              className="subject w-68 lg:w-108 lg:h-12 my-2 pl-2 bg-lightPink border-solid border-lightBlue border-b-2"
              placeholder="Subject"
            />
            <div className="flex justify-end py-1">
              <button className="hidden md:block bg-greenT w-16 mr-8 self-end rounded border-solid border-lightBlue border-2">
                Send
              </button>
              <textarea
                name="message"
                className="message h-full w-68 lg:w-108 pl-2 bg-lightPink border-solid border-lightBlue border-b-2"
                placeholder="Message"
              />
              <button className="md:hidden bg-greenT w-16 ml-5 self-end rounded border-solid border-lightBlue border-2">
                Send
              </button>
            </div>
          </StyledForm>
          <div className="w-full bg-lightBlueT flex flex-col lg:my-2">
            <div className="w-full flex justify-center">
              <StyledFace />
              <a href="https://www.instagram.com/veggiessimo.au/">
                <StyledInst />
              </a>
              <StyledPin />
            </div>
            <div className="flex justify-center items-center">
              <StyledEmail />
              <p className="text-xl md:text-xxl lg:text-xxxl pb-3 md:pb-4 font-sans">
                veggiessimo@gmail.com
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </Container>
    </>
  );
};

const StyledTitle = styled.h1`
  @media (max-width: 640px) {
    top: 35vw;
  }
`;

const StyledForm = styled.form`
  bottom: 94px;
  width: 90%;
  height: 73.5vw;

  div {
    height: 30vw;
  }
  button {
    height: 15vw;
  }

  @media (min-width: 768px) {
    height: 55%;
    bottom: 133px;
    div {
      height: 30%;
    }
    button {
      height: 50%;
    }
  }
  @media (min-width: 1024px) {
    bottom: 160px;
  }

  @media (max-width: 640px) {
    .name,
    .subject,
    .email {
      width: 100%;
      height: 7.5vw;
      padding-bottom: 4px;
    }
  }
`;

const StyledInst = styled(Instagram)`
  width: 2rem;
  height: 2rem;
  margin: 10px;

  @media (min-width: 768px) {
    width: 3rem;
    height: 3rem;
    margin: 15px;
  }
`;
const StyledFace = styled(Facebook)`
  width: 2rem;
  height: 2rem;
  margin: 10px;

  @media (min-width: 768px) {
    width: 3rem;
    height: 3rem;
    margin: 15px;
  }
`;
const StyledPin = styled(PinterestWithCircle)`
  width: 2rem;
  height: 2rem;
  margin: 10px;

  @media (min-width: 768px) {
    width: 3rem;
    height: 3rem;
    margin: 15px;
  }
`;

const StyledEmail = styled(Email)`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 5px 10px;

  @media (min-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 10px 15px;
  }
`;

export default Contact;
