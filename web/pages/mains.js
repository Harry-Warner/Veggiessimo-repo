import React, { useState, useEffect } from "react";
import Link from "next/link";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import styled from "styled-components";
import TitleComponent from "../components/titleComponent.jsx";
import RecipeList from "../styled/recipeslist";
import Footer from "../components/footer";
import Container from "../styled/container";
import Colors from "../styled/colors";
import CheckIcon from "@material-ui/icons/Check";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Breakfast = (props) => {
  const { posts = [] } = props;
  const [vopen, setVOpen] = useState(false);
  const [gopen, setGOpen] = useState(false);
  const [blogs, setBlogs] = useState(null);
  const [filteredBlogs, setFilteredBlogs] = useState(null);
  const [loading, setLoading] = useState(false);

  function fetchMyPosts() {
    setBlogs(posts);
    setFilteredBlogs(posts);
    setLoading(true);
  }

  useEffect(() => {
    fetchMyPosts();
  }, []);

  if (!loading) {
    return "...Loading";
  }

  var vegan = blogs.filter((e) => e.categories.includes("Vegan"));
  var glutenFree = blogs.filter((e) => e.categories.includes("Gluten Free"));
  var both = blogs.filter(
    (e) =>
      e.categories.includes("Vegan") && e.categories.includes("Gluten Free")
  );

  function showVegan() {
    setVOpen(!vopen);
    if (gopen === true && !vopen) {
      setFilteredBlogs(both);
    } else if (gopen === false && !vopen) {
      setFilteredBlogs(vegan);
    } else if (gopen === true && vopen) {
      setFilteredBlogs(glutenFree);
    } else {
      setFilteredBlogs(blogs);
    }
  }

  function showGlutenFree() {
    setGOpen(!gopen);
    if (vopen === true && gopen) {
      setFilteredBlogs(vegan);
    } else if (vopen === false && !gopen) {
      setFilteredBlogs(glutenFree);
    } else if (vopen === true && !gopen) {
      setFilteredBlogs(both);
    } else {
      setFilteredBlogs(blogs);
    }
  }

  return (
    <>
      <TitleComponent title="Mains" />
      <Container>
        <h1 className="w-full md:w-2/3 lg:w-1/2 h-12 md:h-16 lg:h-20 mx-auto text-center mt-12 md:mt-16 bg-lightBlueT flex justify-center items-center text-big md:text-huge font-script">
          Mains
        </h1>
        <div className="flex justify-center mx-auto my-16">
          <StyledButton open={vopen} onClick={() => showVegan()}>
            <CheckIcon className="icon" fontSize="large" />
            <div className="circle" />
            <p>Vegan</p>
          </StyledButton>
          <StyledButton open={gopen} onClick={() => showGlutenFree()}>
            <CheckIcon className="icon" fontSize="large" />
            <div className="circle" />
            <p>Gluten Free</p>
          </StyledButton>
        </div>
        <RecipeList>
          {filteredBlogs &&
            filteredBlogs.map(
              ({ _id, title = "", mainImage, slug = "" }) =>
                slug && (
                  <li key={_id}>
                    <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                      <a>
                        {mainImage && (
                          <img
                            className="h-48 lg:h-64 w-full object-cover object-center"
                            src={urlFor(mainImage).url()}
                            alt="Food"
                          />
                        )}
                        <div className="flex justify-center">
                          <p className="font-sans self-center text-black uppercase mx-10 my-2 text-sm md:text-lg lg:text-xxl">
                            {title}
                            <span className="vegetarianicon"> &#9419;</span>
                          </p>
                        </div>
                      </a>
                    </Link>
                    <StyledLine />
                  </li>
                )
            )}
        </RecipeList>
        <Footer />
      </Container>
    </>
  );
};

Breakfast.getInitialProps = async () => ({
  posts: await client.fetch(groq`
      *[_type == "post" && publishedAt < now() && categories[]._ref == "327f026c-2dcc-46da-b58f-d876c2be0005"]{
        title,
        mainImage,
        slug,
        _id,
        "categories": categories[]->title,
        }|order(publishedAt desc)
    `),
});

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 5px 10px;
  text-transform: uppercase;
  background: ${Colors.lightPink};
  position: relative;
  border: 2px solid ${Colors.lightBlue};
  cursor: pointer;

  p {
    font-size: 18px;
    margin-left: 2px;
  }

  .circle {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border-radius: 50%;
    border: 2px solid ${Colors.blue};
    position: relative;
    z-index: 0;
  }

  .icon {
    position: absolute;
    top: -2px;
    left: 7px;
    display: ${({ open }) => (open ? "block" : "none")};
    z-index: 10;
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

export default Breakfast;
