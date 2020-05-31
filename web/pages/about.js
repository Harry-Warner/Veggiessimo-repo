import React from "react";
import Container from "../styled/container";
import Footer from "../components/footer";
import TitleComponent from "../components/titleComponent.jsx";

const About = () => {
  return (
    <>
      <TitleComponent title="About" />
      <Container>
        <div className="relative mt-3 lg:mt-16 pt-6 md:pt-1 pt:4">
          <div className="z-20 w-full flex justify-center absolute top-0 left-0">
            <h1 className="pt-2 md:pt-3 text-big md:text-huge font-script">
              Once upon a veg!
            </h1>
          </div>
          <div className="z-10 w-full flex justify-center absolute top-0 left-0">
            <img
              className="w-64 block md:hidden"
              src="images/pinkbrush640.png"
              alt="banner"
            />
            <img
              className="w-108 hidden md:block lg:hidden"
              src="images/pinkbrush768.png"
              alt="banner"
            />
            <img
              className="w-116 hidden lg:block"
              src="images/pinkbrush1024.png"
              alt="banner"
            />
          </div>
          <img
            className="z-0 relative w-full mx-auto py-5 md:pb-6 lg:pb-8 md:pt-16 lg:pt-16"
            src="images/about.jpeg"
            alt="friends"
          />
        </div>
        <div className="flex flex-col relative leading-tight w-full mx-auto mb-2 md:mb-4 lg:mb-6 text-sm md:text-base lg:text-lg p-6 bg-lightPink">
          <div className="flex flex-col md:flex-row justify-start w-full">
            <p className="w-full md:w-1/2 lg:w-5/12 text-sm md:text-base lg:text-lg p-4 mb-6 bg-lightBlueT">
              HOLA! <br />
              <br />
              We are Milly and Maria, two good friends from very different sides
              of the world trying to make a go at a new life down under.
              <br />
              <br />
              Our story begins back in the French alpine town of Chamonix Mont
              blanc, where we first met and spent almost 5 years doing what we
              love best, living an active outdoor lifestyle. Food has always
              been of is of great importance to both of us and we love how the
              fact that certain foods make us feel healthy and energised.
            </p>
            <img
              className="w-full md:w-3/12 lg: w-2/12 self-center md:self-end m-3 md:m-6"
              src="https://via.placeholder.com/450"
              alt="cooking"
            />
          </div>
          <p className="mt-6 md:mt-0">
            But hey where is the VEGETABLE in all of this? <br />
            <br />
            With Argentinian and French roots, both of our cultures were very
            much centred around meal time when growing up. The traditional
            cuisine we grew up with was mostly meat based and we had very little
            access to good vegetarian meals. Now fast forward 20 years, we
            continue to find that there could be more vegetarian variety with
            HEALTHY + TASTY vegetarian options on the market. <br />
            <br />
            We will be the first to put our hands up and say that we have not
            always followed a strict vegetarian diet plan. WHAT THE VEG! we hear
            you… Our vision, our idea is to appreciate all things veggie. We
            want to inspire you to cook in fabulous ways with veg and reduce
            your meat intake but not feel too guilty if you slip from time to
            time. We know the importance of listening to your body and doing
            what’s right for it.
            <br />
            <br />
            We decided to start experimenting, combining the flavours from our
            childhoods with ingredients from the different places we have
            travelled to, reminding us of the all the lovely people we have
            shared meals with.
            <br />
            <br />
            So whether you are vegetarian or looking to make changes to your
            diet or wanting to live a more sustainable lifestyle, we just want
            you to embrace the veg and hope that you will find our meat free
            meal alternatives VEGGIESSIMO. *little Italian hand gesture*
            <br />
            <br /> MEALS + LOVE,
            <br />
            <br />
            Milly & Maria
          </p>
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default About;
