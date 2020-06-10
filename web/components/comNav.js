import React, { useState, useEffect } from "react";
import AutosizeInput from "react-input-autosize";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import Colors from "../styled/colors";

const ComNav = ({ posts, setSearchPosts }) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [value, setValue] = useState("");

  const env = posts.filter((e) => e.categories.includes("Environment"));
  const health = posts.filter((e) => e.categories.includes("Health"));
  const local = posts.filter((e) => e.categories.includes("Local"));

  const wordCheck = (val, title) => {
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
    let info = title
      .split(" ")
      .join()
      .replace(/,/g, " ")
      .toLowerCase()
      .split(" ");
    for (let i = 0; i < newArr.length; i++) {
      if (info.includes(newArr[i])) {
        count++;
      }
    }
    return count === newArr.length;
  };

  useEffect(() => {
    setSearchPosts(
      filteredPosts.filter((post) => wordCheck(value, post.title))
    );
  }, [value, filteredPosts]);

  return (
    <StyledNav className="bg-lightPink w-full h-12 md:h-16 flex items-center text-lg md:text-xl">
      <div
        className={`filter ${posts === filteredPosts}`}
        onClick={() => setFilteredPosts(posts)}
      >
        All
      </div>
      <div
        className={`filter ${
          filteredPosts[0]._id === env[0]._id &&
          filteredPosts.length === env.length
        }`}
        onClick={() => setFilteredPosts(env)}
      >
        Environment
      </div>
      <div
        className={`filter ${
          filteredPosts[0]._id === health[0]._id &&
          filteredPosts.length === health.length
        }`}
        onClick={() => setFilteredPosts(health)}
      >
        Health
      </div>
      <div
        className={`filter ${
          filteredPosts[0]._id === local[0]._id &&
          filteredPosts.length === local.length
        }`}
        onClick={() => setFilteredPosts(local)}
      >
        Local
      </div>
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
  );
};

const StyledNav = styled.div`
  position: relative;
  margin-bottom: 100px;
  justify-content: space-around;
  .filter {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 12.5px;
    cursor: pointer;

    &:hover {
      background: ${Colors.lightBlueT};
    }
  }
  .true {
    border-bottom: 4px solid ${Colors.blue};
  }
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
    .filter {
      margin: 0 15px;
      padding: 0 15px;
    }
    .search-wrapper {
      top: 0;
      right: 10px;
      width: fit-content;
    }
  }

  @media (min-width: 1024px) {
    .filter {
      margin: 0 30px;
      padding: 0 30px;
    }
    .search-wrapper {
      top: 0;
      right: 10px;
      width: fit-content;
    }
  }
`;

export default ComNav;
