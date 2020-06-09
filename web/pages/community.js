import React, { useState } from "react";
import Link from "next/link";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import Footer from "../components/footer";
import TitleComponent from "../components/titleComponent.jsx";
import Container from "../styled/container";
import PostList from "../styled/postlist";
import ComNav from "../components/comNav";
import MealTitle from "../components/mealtitle";
import TextBox from "../components/textbox";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Community = (props) => {
  const { posts = [] } = props;
  const [searchPosts, setSearchPosts] = useState(posts);

  return (
    <>
      <TitleComponent title="Community" />
      <Container>
        <MealTitle title="Community" />
        <h2 className="mx-auto text-center font-sans my-6 md:mb-12 lg:mb-16 text-xs md:text-lg lg:text-xl bg-white">
          Ideas on how to live a more sustainable lifestyle
        </h2>
        <ComNav posts={posts} setSearchPosts={setSearchPosts} />
        <PostList community>
          {searchPosts &&
            searchPosts.map(
              ({ _id, title = "", mainImage, slug = "" }) =>
                slug && (
                  <li key={_id}>
                    <Link
                      href={`/post/community/[slug]`}
                      as={`/post/community/${slug.current}`}
                    >
                      <a>
                        {mainImage && (
                          <img
                            className="h-24 md:h-32 lg:h-48 w-9/12 md:w-11/12 mx-auto my-4 object-cover object-center"
                            src={urlFor(mainImage).url()}
                            alt="Food"
                          />
                        )}
                        <TextBox text={title} />
                      </a>
                    </Link>
                  </li>
                )
            )}
        </PostList>
        <Footer />
      </Container>
    </>
  );
};

Community.getInitialProps = async () => ({
  posts: await client.fetch(groq`
        *[_type == "communityPost" && publishedAt < now()]{
          title,
          slug,
          _id,
          mainImage,
          "categories": categories[]->title,
          _updatedAt,
        }|order(publishedAt desc)
      `),
});

export default Community;
