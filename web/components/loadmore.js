import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { func, array } from "prop-types";

const LoadMore = ({ searchPosts, setLoadSearchPosts }) => {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(2);

  useEffect(() => {
    if (searchPosts.length <= count) {
      setShow(false);
      setLoadSearchPosts(searchPosts);
    } else {
      setLoadSearchPosts(searchPosts.slice(0, count));
      setShow(true);
      console.log(searchPosts);
    }
    console.log(count);
  }, [searchPosts, count]);

  return (
    <>
      <StyledButton
        show={show}
        className="mx-auto my-4 px-2 py-1 font-bold rounded-xl bg-white text-blue border-2 border-solid border-blue lg:hover:text-white lg:hover:bg-blue"
        onClick={() => setCount(count + 20)}
      >
        Load More
      </StyledButton>
    </>
  );
};

LoadMore.propTypes = {
  searchPosts: array.isRequired,
  setLoadSearchPosts: func.isRequired,
};

const StyledButton = styled.button`
  display: ${(props) => (props.show ? "block" : "none")};
`;

export default LoadMore;
