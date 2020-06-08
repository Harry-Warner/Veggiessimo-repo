import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CheckIcon from "@material-ui/icons/Check";
import SearchIcon from "@material-ui/icons/Search";
import AutosizeInput from "react-input-autosize";
import Colors from "../styled/colors";
import { func, array } from "prop-types";

const SearchFilter = ({ posts, setSearchPosts }) => {
  const [vopen, setVOpen] = useState(false);
  const [gopen, setGOpen] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [value, setValue] = useState("");

  const vegan = posts.filter((e) => e.categories.includes("Vegan"));
  const glutenFree = posts.filter((e) => e.categories.includes("Gluten Free"));
  const both = posts.filter(
    (e) =>
      e.categories.includes("Vegan") && e.categories.includes("Gluten Free")
  );

  const showVegan = () => {
    setVOpen(!vopen);
    if (gopen === true && !vopen) {
      setFilteredPosts(both);
    } else if (gopen === false && !vopen) {
      setFilteredPosts(vegan);
    } else if (gopen === true && vopen) {
      setFilteredPosts(glutenFree);
    } else {
      setFilteredPosts(posts);
    }
  };

  const showGlutenFree = () => {
    setGOpen(!gopen);
    if (vopen === true && gopen) {
      setFilteredPosts(vegan);
    } else if (vopen === false && !gopen) {
      setFilteredPosts(glutenFree);
    } else if (vopen === true && !gopen) {
      setFilteredPosts(both);
    } else {
      setFilteredPosts(posts);
    }
  };

  // allow for user input differences
  const wordCheck = (val, title, cats) => {
    let count = 0;
    let arr = val.toLowerCase().split(" ");
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== "" && arr[i] !== "and") {
        newArr.push(arr[i]);
      }
    }
    let info = cats.concat(title.split(" "));
    let newInfo = info.join().replace(/,/g, " ").toLowerCase().split(" ");
    for (let i = 0; i < newArr.length; i++) {
      if (newInfo.includes(newArr[i])) {
        count++;
      }
    }
    return count === newArr.length;
  };

  useEffect(() => {
    setSearchPosts(
      filteredPosts.filter((post) =>
        wordCheck(value, post.title, post.categories)
      )
    );
  }, [value, filteredPosts]);

  return (
    <div className="flex flex-col justify-center mx-auto my-16">
      <StyledSearch className="pl-10 pr-4 mb-2 relative flex justify-around items-center h-10 mx-auto bg-white border-2 border-blue border-solid rounded-xl">
        <div className="absolute left-0 pl-2">
          <SearchIcon style={{ color: "#5984c4" }} />
        </div>
        <AutosizeInput
          type="text"
          name="search"
          placeholder="Search"
          placeholderIsMinWidth
          inputStyle={{
            fontSize: 18,
            minWidth: "60px",
          }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </StyledSearch>
      <div className="flex justify-center">
        <StyledButton open={vopen} onClick={() => showVegan()}>
          <CheckIcon className="icon" fontSize="large" />
          <div className="circle" />
          <p className="font-bold">Vegan</p>
        </StyledButton>
        <StyledButton open={gopen} onClick={() => showGlutenFree()}>
          <CheckIcon className="icon" fontSize="large" />
          <div className="circle" />
          <p className="font-bold">Gluten Free</p>
        </StyledButton>
      </div>
    </div>
  );
};

SearchFilter.propTypes = {
  posts: array.isRequired,
  setSearchPosts: func.isRequired,
};

const StyledSearch = styled.div`
  width: fit-content;
`;

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

export default SearchFilter;
