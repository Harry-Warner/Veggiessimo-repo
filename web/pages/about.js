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
        description={content.seoDescription}
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
              {content.title}
            </h1>
          </div>
          <div className="z-10 w-full flex justify-center absolute top-0 left-0">
            <img
              className="w-64 h-20 block md:hidden"
              src="images/pinkbrush640.png"
              alt="banner"
            />
            <img
              className="w-108 h-32 hidden md:block lg:hidden"
              src="images/pinkbrush768.png"
              alt="banner"
            />
            <img
              className="w-116 h-32 hidden lg:block"
              src="images/pinkbrush1024.png"
              alt="banner"
            />
          </div>
          <img
            className="z-0 relative w-full mx-auto pt-5 md:pb-6 lg:pb-8 md:pt-16 lg:pt-16"
            src={urlFor(content.mainImage).url()}
            alt="friends"
          />
        </div>
        <div className="flex flex-col relative leading-tight w-full mx-auto mb-2 md:mb-4 lg:mb-6 text-sm md:text-base lg:text-lg">
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <div className="w-full md:w-1/2 p-6 md:mb-6 bg-white">
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
                src={urlFor(content.secondImage).url()}
                alt="cooking"
              />
            </div>
          </div>
          <div className="mt-6 p-6 bg-lightPinkT">
            <BlockContent
              serializers={serializers}
              blocks={content.Description}
              {...client.config()}
            />
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
