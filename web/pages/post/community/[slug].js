import React from "react";
import groq from "groq";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import client from "../../../client";
import TitleComponent from "../../../components/titleComponent.jsx";
import Footer from "../../../components/footer";
import styled from "styled-components";
import Container from "../../../styled/container";
import PostHeading from "../../../components/postheading";
import Colors from "../../../styled/colors";
import serializers from "../../../styled/serializers";
import MetaTags from "../../../components/metatags";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const CommunityPost = (props) => {
  const { post = [], community = [] } = props;
  return (
    <>
      <MetaTags
        description={post.seoDescription}
        type="article"
        title={post.seoTitle}
        url={`post/community/${post.slug.current}`}
        imageSrc={urlFor(post.mainImage).url()}
      />
      <TitleComponent title={post.seoTitle} />
      <Container>
        <article>
          <PostHeading
            community
            category={post.categories}
            title={post.title}
            name={post.name}
          />
          {post.mainImage && (
            <div>
              <img
                className="w-full mt-3 lg:w-10/12 mx-auto object-cover object-center"
                src={urlFor(post.mainImage).url()}
                alt="food"
              />
            </div>
          )}
          <div className="lg:mt-8">
            <StyledBox className="float-right relative flex w-full lg:w-5/12 lg:mx-10 mx-auto justify-center self-center bg-green lg:bg-white p-2">
              <div className="font-bold md:font-normal self-center text-center mx-auto md:my-2">
                <BlockContent
                  serializers={serializers}
                  blocks={post.description}
                  {...client.config()}
                />
              </div>
              <div className="line right" />
              <div className="line bottom" />
              <div className="line left" />
              <div className="line top" />
            </StyledBox>
            <div className="mx-2 md:mx-6 lg:mx-10 mt-4 lg:mt-0">
              <BlockContent
                serializers={serializers}
                blocks={post.body}
                imageOptions={{ w: 320, h: 240, fit: "max" }}
                {...client.config()}
              />
            </div>
          </div>
          <hr className="col-span-12 self-center w-full h-3 border-none bg-lightPink my-5" />
        </article>
        <StyledList className="relative w-full mx-auto pt-12 pb-6 px-4 grid grid-cols-2 md:grid-cols-3 bg-lightBlueT">
          <h1 className="pt-2 absolute w-full text-center text-xl top-0 left-0 font-sans font-bold uppercase">
            - More Of Community -
          </h1>
          {community.map(
            ({ _id, title = "", mainImage, slug = "" }) =>
              slug && (
                <li key={_id}>
                  <Link
                    href="/post/community/[slug]"
                    as={`/post/community/${slug.current}`}
                  >
                    <a>
                      <div className="mx-2 md:mx-4 flex flex-col">
                        {mainImage && (
                          <img
                            className="w-full h-28 md:h-32 lg:h-40 object-cover object-center"
                            src={urlFor(mainImage).url()}
                            alt="Food"
                          />
                        )}
                        <p className="px-1 h-16 md:h-20 lg:h-24 w-full font-sans bg-white flex items-center justify-center text-center text-base md:text-xl lg:text-xxl leading-tight">
                          {title}
                        </p>
                      </div>
                    </a>
                  </Link>
                </li>
              )
          )}
        </StyledList>
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

const queryPosts = groq`*[_type == "communityPost" && slug.current == $slug][0]{
  title,
  seoTitle,
  seoDescription,
  slug,
  mainImage,
  description[]{${links}},
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body[]{${links}},
}`;

const queryCommunity = groq`*[_type == "communityPost" && publishedAt < now() && slug.current != $slug]|order(publishedAt desc){
    title,
    mainImage,
    slug,
    _id,
    }[0...3]
  `;

CommunityPost.getInitialProps = async function (context) {
  // Default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  return {
    post: await client.fetch(queryPosts, { slug }),
    community: await client.fetch(queryCommunity, { slug }),
  };
};

const StyledBox = styled.div`
  .line {
    position: absolute;
    background: ${Colors.blue};
    display: none;

    @media (min-width: 1024px) {
      display: block;
    }
  }
  .right {
    height: calc(100% + 30px);
    top: -15px;
    right: 0;
    width: 2px;
  }
  .bottom {
    width: calc(100% + 30px);
    left: -15px;
    bottom: 0;
    height: 2px;
  }
  .left {
    height: calc(100% + 30px);
    top: -15px;
    left: 0;
    width: 2px;
  }
  .top {
    width: calc(100% + 30px);
    left: -15px;
    top: 0;
    height: 2px;
  }
`;

const StyledList = styled.div`
  height: fit-content;
  align-self: center;

  li {
    @media (max-width: 767px) {
      &:nth-child(3) {
        display: none;
      }
    }
  }
`;

export default CommunityPost;
