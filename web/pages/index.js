// index.js
import Link from "next/link";
import Head from "next/head";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import styled from "styled-components";
import Header from "../components/header";
import Banner from "../components/banner";
import NavBar from "../components/navbar";
import AboutLink from "../components/aboutlink";
import RecipesLink from "../components/recipeslink";
import CommunityLink from "../components/communitylink";
import Footer from "../components/footer";
import GlobalStyle from "../styled/global";

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
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        <Header />
        <Banner />
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
                        <div className="list-item">
                          <img src={urlFor(mainImage).width(180).url()} />
                        </div>
                      )}
                      <p className="text">{title}</p>
                    </a>
                  </Link>
                  <div className="text">
                    {"  "}({new Date(_updatedAt).toDateString()})
                  </div>
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
  margin: 15px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

  .list-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text {
    text-align: center;
  }
`;

export default Index;
