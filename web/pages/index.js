// index.js
import Link from "next/link";
import Head from "next/head";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import styled from "styled-components";
import Header from "../components/header";
import banner from "../images/banner.png";
import NavBar from "../components/navbar";
import AboutLink from "../components/aboutlink";
import RecipesLink from "../components/recipeslink";
import CommunityLink from "../components/communitylink";
import Footer from "../components/footer";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Index = (props) => {
  const { posts = [] } = props;

  return (
    <React.Fragment>
      <Head>
        <title>Veggiessimo</title>
        <link
          rel="stylesheet"
          href="http://static.sasongsmat.nu/fonts/vegetarian.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg mx-auto">
        <Header />
        <img className="w-full mt-8" src={banner} />
        <NavBar />
        <AboutLink />
        <RecipesLink />
        <RecipeList>
          {posts.map(
            ({ _id, title = "", mainImage, slug = "", _updatedAt = "" }) =>
              slug && (
                <li key={_id}>
                  <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                    <a>
                      {mainImage && (
                        <img
                          className="h-48 w-full object-cover object-center"
                          src={urlFor(mainImage).url()}
                        />
                      )}
                      <div className="flex justify-between">
                        <p className="font-sans self-center text-black uppercase mx-10 my-2 text-sm">
                          {title}
                          <span className="vegetarianicon"> &#9419;</span>
                        </p>
                        <div className="font-sans self-center text-black mx-10 my-2 text-xxs">
                          {"  "}({new Date(_updatedAt).toDateString()})
                        </div>
                      </div>
                    </a>
                  </Link>
                  <StyledLine />
                </li>
              )
          )}
        </RecipeList>
        <CommunityLink />
        <Footer />
      </div>
    </React.Fragment>
  );
};

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`
      *[_type == "post" && publishedAt < now() && categories[]._ref == "327f026c-2dcc-46da-b58f-d876c2be0005"]|order(publishedAt desc)
    `),
});

const RecipeList = styled.ul`
  width: 100%;
  margin: 10px auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledLine = styled.hr`
  width: 50%;
  margin: 20px auto;
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
`;

export default Index;
