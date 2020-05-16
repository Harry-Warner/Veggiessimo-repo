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
          rel="stylesheet"
          href="http://static.sasongsmat.nu/fonts/vegetarian.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <GlobalStyle />
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
                          <StyledImage src={urlFor(mainImage).url()} />
                        </div>
                      )}
                      <LinkText>
                        <p id="title" className="text">
                          {title}
                          <span className="vegetarianicon"> &#9419;</span>
                        </p>
                        <div className="text">
                          {"  "}({new Date(_updatedAt).toDateString()})
                        </div>
                      </LinkText>
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

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  .list-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text {
    margin: 10px 40px;
    font-size: 10px;
    font-family: "fira-sans", sans-serif;
    align-self: center;
    color: #000;
  }

  #title {
    font-size: 20px;
    text-transform: uppercase;
  }
`;

const LinkText = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 50vw;
  object-fit: cover;
  object-position: center;
`;

const StyledLine = styled.hr`
  width: 50vw;
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
