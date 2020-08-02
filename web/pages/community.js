import React, { useState } from "react";
import Link from "next/link";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import TitleComponent from "../components/titleComponent.jsx";
import PostList from "../styled/postlist";
import ComNav from "../components/comNav";
import MealTitle from "../components/mealtitle";
import TextBox from "../components/textbox";
import LoadMore from "../components/loadmore";
import MetaTags from "../components/metatags";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Community = (props) => {
  const { posts = [] } = props;
  const [searchPosts, setSearchPosts] = useState(posts);
  const [loadSearchPosts, setLoadSearchPosts] = useState(searchPosts);

  return (
    <>
      <MetaTags
        description="Ideas on how to live a more sustainable lifestyle"
        type="object"
        title="Community | Veggiessimo"
        url="community"
        imageSrc="https://veggiessimo.com.au/images/onion768.png"
      />
      <TitleComponent title="Community" />
      <MealTitle
        title="Community"
        description="Ideas on how to live a more sustainable lifestyle"
      />
      <ComNav posts={posts} setSearchPosts={setSearchPosts} />
      <PostList community>
        {loadSearchPosts &&
          loadSearchPosts.map(
            ({ _id, title = "", mainImage, slug = "" }) =>
              slug && (
                <li key={_id}>
                  <Link
                    passHref
                    href={`/post/community/[slug]`}
                    as={`/post/community/${slug.current}`}
                  >
                    <a>
                      {mainImage && (
                        <img
                          className="h-24 md:h-32 lg:h-48 w-9/12 md:w-11/12 mx-auto my-4 object-cover object-center"
                          src={urlFor(mainImage).width(260).url()}
                          alt={title}
                        />
                      )}
                      <TextBox text={title} />
                    </a>
                  </Link>
                </li>
              )
          )}
      </PostList>
      <LoadMore
        searchPosts={searchPosts}
        setLoadSearchPosts={setLoadSearchPosts}
      />
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
