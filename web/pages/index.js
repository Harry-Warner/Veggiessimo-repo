// index.js
import Link from "next/link";
import groq from "groq";
import client from "../client";
import Header from "../components/header";
import Banner from "../components/banner";
import NavBar from "../components/navbar";
import AboutLink from "../components/aboutlink";
import GlobalStyle from "../styled/global";

const Index = (props) => {
  const { posts = [] } = props;
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Banner />
      <NavBar />
      <AboutLink />
      <p>Welcome to the Blog!!!</p>
      {posts.map(
        ({ _id, title = "", slug = "", _updatedAt = "" }) =>
          slug && (
            <li key={_id}>
              <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                <a>{title}</a>
              </Link>
              {"  "}({new Date(_updatedAt).toDateString()})
            </li>
          )
      )}
    </div>
  );
};

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
  `),
});

export default Index;
