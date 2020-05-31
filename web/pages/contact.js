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
          <h1 className="absolute text-xxxl md:text-vbig lg:text-huge font-script right-0 mr-4 md:mr-6 lg:mr-8 mt-6">
            Get in Touch
          </h1>
          <StyledForm className="absolute flex flex-col justify-end">
            <input
              type="text"
              name="name"
              className="name my-2 self-end bg-lightPink border-solid border-lightBlue border-b-2"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              className="email my-2 self-end bg-lightPink border-solid border-lightBlue border-b-2"
              placeholder="Email"
            />
            <input
              type="text"
              name="subject"
              className="subject my-2 self-end bg-lightPink border-solid border-lightBlue border-b-2"
              placeholder="Subject"
            />
            <div className="flex justify-end py-1">
              <textarea
                name="message"
                className="message h-16 pl-2 bg-lightPink border-solid border-lightBlue border-b-2"
                placeholder="Message"
              />
              <button className="bg-greenT w-12 my-3 ml-3 rounded border-solid border-lightBlue border-2">
                Send
              </button>
            </div>
          </StyledForm>
          <div className="w-full bg-lightBlueT flex flex-col">
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

const StyledForm = styled.form`
  top: 25%;
  right: 2.5%;

  .name {
    width: 42.5vw;
    height: 20px;
    padding-left: 5px;
  }

  .email {
    width: 45vw;
    height: 20px;
    padding-left: 5px;
  }

  .subject {
    width: 47.5vw;
    height: 20px;
    padding-left: 5px;
  }

  .message {
    width: 38vw;
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
