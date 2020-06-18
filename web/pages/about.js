import React from "react";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import Container from "../styled/container";
import Footer from "../components/footer";
import TitleComponent from "../components/titleComponent.jsx";
import serializers from "../styled/serializers";
import MetaTags from "../components/metatags";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const About = (props) => {
  const { content = [] } = props;
  return (
    <>
      <MetaTags
        description="We are Milly and Maria and we want to show a more SUSTAINABLE and TASTY way of living." // {content.seoDescription}
        type="article"
        title={content.seoTitle}
        url="about"
        imageSrc={urlFor(content.mainImage).url()}
      />
      <TitleComponent title="About" />
      <Container>
        <div className="relative mt-3 lg:mt-16 pt-6 md:pt-1 pt:4">
          <div className="z-20 w-full flex justify-center absolute top-0 left-0">
            <h1 className="pt-2 md:pt-3 text-big md:text-huge font-script">
              Once Upon a Veg!
            </h1>
          </div>
          <div className="z-10 w-full flex justify-center absolute top-0 left-0">
            <img
              className="w-64 h-20 block md:hidden"
              src="images/pinkbrush640.png"
              alt="paint brush swipe used as a banner for the heading"
            />
            <img
              className="w-108 h-32 hidden md:block lg:hidden"
              src="images/pinkbrush768.png"
              alt="paint brush swipe used as a banner for the heading"
            />
            <img
              className="w-116 h-32 hidden lg:block"
              src="images/pinkbrush1024.png"
              alt="paint brush swipe used as a banner for the heading"
            />
          </div>
          <img
            className="z-0 relative w-full mx-auto pt-5 md:pb-6 lg:pb-8 md:pt-16 lg:pt-16"
            src={urlFor(content.mainImage).url()}
            alt="Milly Chopping a cauliflower and maria grinding spices in a pestle and mortar, surrounded by an assortment of spices and bowls of fruit and veg." //{content.mainImage.altText}
          />
        </div>
        <div className="flex flex-col relative leading-tight w-full mx-auto mb-2 md:mb-4 lg:mb-6 text-sm md:text-base lg:text-lg">
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <div className="w-full md:w-1/2 p-6 md:mb-6 mb-4 text-sm md:text-lg lg:text-xl">
              <BlockContent
                serializers={serializers}
                blocks={content.shortDescription}
                {...client.config()}
              />
              {/* <span className="text-base md:text-xl lg:text-xxl">Hola!</span>
              <br />
              <br />
              We are Milly and Maria, two friends from different sides of the
              world, making the most of a new life DOWN UNDER.
              <br />
              <br />
              On our world travels we connected with many types of cuisine and
              adapted to a variety of LOCAL PRODUCE. Today, after ten years on
              the road and a few auto-immune diseases later, we realised that
              well being is a journey that starts in the kitchen and that mother
              nature made seasons for a reason. We want to show a more
              SUSTAINABLE and TASTY way of living that not only makes you and
              your gut feel better, but is also kind to the planet. */}
            </div>
            <div className="relative w-11/12 md:w-5/12 flex justify-start items-end h-64 lg:h-84 mx-auto">
              <div className="w-19/20 h-19/20 absolute border-2 border-solid border-blue right-0 top-0" />
              <img
                className="w-19/20 h-19/20 object-cover object-center"
                src={urlFor(content.secondImage).url()}
                alt="close up of ginger, lemon, half a lime and half an avacado"
              />
            </div>
          </div>
          <div className="mt-6 p-6 bg-lightPinkT mb-4 text-sm md:text-lg lg:text-xl">
            <BlockContent
              serializers={serializers}
              blocks={content.Description}
              {...client.config()}
            />
            {/* Our story begins in the French alpine town of Chamonix Mont Blanc,
            where we first met and spent 5 years doing WHAT WE LOVE BEST, living
            an active outdoor lifestyle. We also both love exploring food and
            the many ways it can make you feel healthy and energised.
            <br />
            <br />
            We are now living in Perth, Western Australia, and have found that
            adapting to a new city and new life is harder than we expected. We
            know from experience that stress is a trigger for auto-immune
            diseases and many other conditions, so we are eager to redress the
            balance.{" "}
            <span className="text-xl md:text-xxxl lg:text-big font-script">
              Veggiessimo
            </span>{" "}
            is our journey to a change in lifestyle in order to stay HAPPY +
            HEALTHY.
            <br />
            <br />
            But hey where is the{" "}
            <span className="text-xl md:text-xxxl lg:text-big font-script">
              Vegetable
            </span>{" "}
            in all of this?
            <br />
            <br />
            With French and Argentinian roots, we grew up in cultures that were
            very much catered around meal time, with cuisines mostly meat based
            and with very little access to good vegetarian meals. Now fast
            forwarding 20 years, we continue to find that there could be more
            vegetarian variety on the market with HEALTHIER + TASTIER options.
            <br />
            <br />
            We want to inspire followers to cook in fabulous ways with VEG
            whilst at the same time reducing their meat intake but not feel too
            guilty if they slip from time to time. We know the importance of
            listening to the body and doing what’s right for it.
            <br />
            <br />
            We are combining flavours from our childhoods with ingredients from
            the different places we have travelled to, creating lovely memories
            of all the people we have shared meals with.
            <br />
            <br />
            So whether you are vegetarian, looking to reduce the meat in your
            diet or simply wanting to live a more SUSTAINABLE LIFESTYLE, we just
            want you to embrace the veg and make your meals{" "}
            <span className="text-xl md:text-xxxl lg:text-big font-script">
              Veggiessimo
            </span>
            .
            <br />
            <br />
            MEALS + LOVE,
            <br />
            <br />
            Milly & Maria xx */}
          </div>
        </div>
        <Footer />
      </Container>
    </>
  );
};

const links = `...,
                markDefs[]{
                  ...,
                  _type == "postLink" => {
                    "slug": @.reference->slug,
                    "type": @.reference->_type,
                  }
                }
              `;

About.getInitialProps = async () => ({
  content: await client.fetch(groq`
      *[_type == "about"][0]{
        title,
        seoTitle,
        seoDescription,
        mainImage,
        secondImage,
        shortDescription[]{${links}},
        Description[]{${links}},
      }
    `),
});

export default About;
