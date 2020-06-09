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

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const CommunityPost = (props) => {
  const { post = [], community = [] } = props;
  return (
    <>
      <TitleComponent title={post.title} />
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
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <StyledBox className="lg:col-start-2 relative flex w-10/12 md:w-9/12 mx-auto justify-center bg-white mt-8 p-2">
              <div className="font-sans md:font-script self-center text-center mx-auto my-2 text-sm md:text-lg">
                <BlockContent blocks={post.description} {...client.config()} />
              </div>
              <div className="line right" />
              <div className="line bottom" />
              <div className="line left" />
              <div className="line top" />
            </StyledBox>
            <div className="lg:row-start-1 flex m-2 p-4 text-xs md:text-base lg:text-lg font-sans bg-white">
              <BlockContent
                blocks={post.body}
                imageOptions={{ w: 320, h: 240, fit: "max" }}
                {...client.config()}
              />
            </div>
          </div>
          <hr className="col-span-12 self-center w-full h-3 border-none bg-lightPink my-5" />
        </article>
        <StyledList className="relative w-full mx-auto pt-12 pb-6 px-4 flex justify-around bg-lightBlueT">
          <h1 className="absolute w-full text-center text-xl top-0 left-0 font-sans font-bold uppercase">
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
                      <div className=" mx-2 flex flex-col">
                        {mainImage && (
                          <img
                            className="w-full h-28 md:h-32 lg:h-40 object-cover object-center"
                            src={urlFor(mainImage).url()}
                            alt="Food"
                          />
                        )}
                        <div className="flex flex-col bg-white py-1">
                          <p className="font-sans text-center self-center text-black mt-4 mb-6 text-xs md:text-lg lg:text-xl leading-tight">
                            {title}
                          </p>
                        </div>
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

const queryPosts = groq`*[_type == "communityPost" && slug.current == $slug][0]{
  title,
  mainImage,
  description,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body,
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
      &:last-child {
        display: none;
      }
    }
  }
`;

export default CommunityPost;
