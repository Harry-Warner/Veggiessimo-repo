import React from "react";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
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
          src={urlFor(content.mainImage).width(1024).url()}
          alt="Milly Chopping a cauliflower and maria grinding spices in a pestle and mortar, surrounded by an assortment of spices and bowls of fruit and veg. Vegetarian cooking."
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
          </div>
          <div className="relative w-11/12 md:w-5/12 flex justify-start items-end h-64 lg:h-84 mx-auto">
            <div className="w-19/20 h-19/20 absolute border-2 border-solid border-blue right-0 top-0" />
            <img
              className="w-19/20 h-19/20 object-cover object-center"
              src={urlFor(content.secondImage).maxWidth(450).url()}
              alt="close up of ginger, lemon, half a lime and half an avacado. Fresh vegetarian cooking"
            />
          </div>
        </div>
        <div className="mt-6 p-6 bg-lightPinkT mb-4 text-sm md:text-lg lg:text-xl">
          <BlockContent
            serializers={serializers}
            blocks={content.Description}
            {...client.config()}
          />
        </div>
      </div>
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
