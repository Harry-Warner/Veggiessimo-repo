import Link from "next/link";
import groq from "groq";
import client from "../client";
import GlobalStyle from "../styled/global";

const Recipes = (props) => {
  const { posts = [] } = props;

  return (
    <React.Fragment>
      <GlobalStyle />
      <p>Recipes!!!</p>
      {posts.map(
        ({ _id, title = "", slug = "", _updatedAt = "" }) =>
          slug && (
            <li key={_id}>
              <Link
                href="../pages/post/[slug]"
                as={`../pages/post/${slug.current}`}
              >
                <a>{title}</a>
              </Link>
              {"  "}({new Date(_updatedAt).toDateString()})
            </li>
          )
      )}
    </React.Fragment>
  );
};

Recipes.getInitialProps = async () => ({
  posts: await client.fetch(groq`
      *[_type == "post" && publishedAt < now() && categories[]._ref == "327f026c-2dcc-46da-b58f-d876c2be0005"]|order(publishedAt desc)
    `),
});

export default Recipes;
