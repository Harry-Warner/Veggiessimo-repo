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
  const wordCheck = (val, title, cats, ings) => {
    let count = 0;
    let arr = val.toLowerCase().split(" ");
    let newArr = [];
    let arr1;
    let l;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== "" && arr[i] !== "and") {
        l = arr[i].length;
        if (arr[i].split("")[l - 1] === "s") {
          arr1 = arr[i].split("");
          arr1.pop();
          newArr.push(arr1.join(""));
        } else {
          newArr.push(arr[i]);
        }
      }
    }
    let info = cats.concat(ings).concat(title.split(" "));
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
        wordCheck(value, post.title, post.categories, post.keyIngredients)
      )
    );
  }, [value, filteredPosts]);

  return (
    <>
      <StyledNav className="bg-lightPink w-full h-12 md:h-16 flex items-center text-lg md:text-xl mt-8">
        <StyledButton open={gopen} onClick={() => showGlutenFree()}>
          <div className="circle">
            <CheckIcon className="icon" fontSize="large" />
          </div>
          <p className="font-bold">Gluten Free</p>
        </StyledButton>
        <StyledButton open={vopen} onClick={() => showVegan()}>
          <div className="circle">
            <CheckIcon className="icon" fontSize="large" />
          </div>
          <p className="font-bold">Vegan</p>
        </StyledButton>
        <div className="search-wrapper">
          <div className="search h-8/12 rounded-xl">
            <AutosizeInput
              type="text"
              name="search"
              placeholder="Search"
              inputStyle={{
                fontSize: 18,
                minWidth: "120px",
                maxWidth: "220px",
                paddingLeft: "10px",
              }}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <div className="">
              <SearchIcon />
            </div>
          </div>
        </div>
      </StyledNav>
    </>
  );
};

SearchFilter.propTypes = {
  posts: array.isRequired,
  setSearchPosts: func.isRequired,
};

const StyledNav = styled.div`
  position: relative;
  margin-bottom: 100px;
  justify-content: space-around;
  .search-wrapper {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    right: 0;
    top: 50px;
    margin-top: 10px;
    .search {
      display: flex;
      width: fit-content;
      padding: 5px 15px;
      background: white;
      border: 1px solid black;
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 8px;
    justify-content: left;
    .search-wrapper {
      top: 0;
      right: 10px;
      width: fit-content;
    }
  }

  @media (min-width: 1024px) {
    .search-wrapper {
      top: 0;
      right: 10px;
      width: fit-content;
    }
  }
`;

const StyledButton = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 12.5px;
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

    .icon {
      position: absolute;
      display: ${({ open }) => (open ? "block" : "none")};
      z-index: 10;
      top: -3.5vw;
      left: -1.5vw;
    }
  }
  @media (min-width: 768px) {
    margin: 0 15px;
    padding: 0 15px;

    .circle {
      width: 25px;
      height: 25px;
      margin-right: 15px;

      .icon {
        font-size: 40px;
        top: -50%;
        left: -25%;
      }
    }

    p {
      font-size: 25px;
      margin-left: 2px;
    }
  }

  @media (min-width: 1024px) {
    margin: 0 30px;
    padding: 0 30px;
  }
`;

export default SearchFilter;
