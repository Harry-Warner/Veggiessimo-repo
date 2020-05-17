import Link from "next/link";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import styled from "styled-components";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Recipes = (props) => {
  const { posts = [] } = props;

  return (
    <React.Fragment>
      <p className="mt-8 text-center w-full">Recipes!!!</p>
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
    </React.Fragment>
  );
};

Recipes.getInitialProps = async () => ({
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

export default Recipes;
