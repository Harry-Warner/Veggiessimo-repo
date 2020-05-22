import React from "react";
import Container from "../styled/container";
import Footer from "../components/footer";
import TitleComponent from "../components/titleComponent.jsx";

const About = () => {
  return (
    <>
      <TitleComponent title="About" />
      <Container>
        <div className="relative mt-3 lg:mt-16">
          <h1 className="absolute pt-1 md:pt-2 top-0 z-20 text-xxxl md:text-vbig mx-2 md:mx-4 font-script">
            Once upon a veg!
          </h1>
          <img
            className="z-10 absolute py-2 top-0"
            src="images/aboutbrush.png"
            alt="banner"
          />
          <img
            className="z-0 relative w-full lg:w-11/12 mx-auto py-2 md:py-8 py-10"
            src="images/about.jpeg"
            alt="friends"
          />
        </div>
        <p className="relative text-base md:text-xl lg:text-xxl py-6 px-6">
          We are Milly and Maria and we love to cook!
        </p>
        <Footer />
      </Container>
    </>
  );
};

export default About;
