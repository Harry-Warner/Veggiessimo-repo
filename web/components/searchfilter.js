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
  const [foodType, setFoodType] = useState(filteredPosts);
  const [value, setValue] = useState("");
  const [select, setSelect] = useState(null);

  // categories
  const vegan = posts.filter((e) => e.categories.includes("Vegan"));
  const glutenFree = posts.filter((e) => e.categories.includes("Gluten Free"));
  const both = posts.filter(
    (e) =>
      e.categories.includes("Vegan") && e.categories.includes("Gluten Free")
  );

  // functions called to filter posts
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

  // filter words through search input
  const wordCheck = (val, title, cats, ings) => {
    // define seperated input values
    let sepVals = [];
    // allow for user input differences
    let arr = val.toLowerCase().split(" ");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== "" && arr[i] !== "and") {
        let l = arr[i].length;
        if (arr[i].split("")[l - 1] === "s") {
          let arr1 = arr[i].split("");
          arr1.pop();
          sepVals.push(arr1.join(""));
        } else {
          sepVals.push(arr[i]);
        }
      }
    }
    // join all items together
    let info = cats.concat(ings).concat(title.split(" "));
    let newInfo = info.join().replace(/,/g, " ").toLowerCase().split(" ");
    // loop through seperated input values and resize items length to match that of the value
    // and push into an array
    let resizedInfo = [];
    let count = 0;
    for (let i = 0; i < sepVals.length; i++) {
      for (let j = 0; j < newInfo.length; j++) {
        resizedInfo.push(
          newInfo[j]
            .split("")
            .slice(0, sepVals[i].length)
            .join()
            .replace(/,/g, "")
        );
      }
      // count the number of seperated values that have found at least one match
      if (resizedInfo.filter((item) => item === sepVals[i]).length > 0) {
        count++;
      }
    }
    // return false if a seperated value doesnt find a match
    return count === sepVals.length;
  };

  // make sure foodType listens to filteredPosts
  useEffect(() => {
    setFoodType(
      select
        ? filteredPosts.filter((e) => e.mealType.includes(select))
        : filteredPosts
    );
  }, [filteredPosts, select]);

  // listen to value changes while pass through the final filter
  useEffect(() => {
    setSearchPosts(
      foodType.filter((post) =>
        wordCheck(
          value,
          post.title,
          post.categories,
          post.ingredients.map((ing) => ing.children[0].text)
        )
      )
    );
  }, [value, foodType]);

  return (
    <>
      <StyledMenu className="text-lg md:text-xl grid gap-1 lg:gap-0 grid-cols-3 grid-rows-3 lg:grid-rows-1 lg:grid-cols-7">
        <div
          onClick={() => setSelect(null)}
          className={`${
            select
              ? "bg-lightPink"
              : "bg-lightBlue lg:border-solid lg:border-blue lg:border-b-4 lg:bg-lightPink"
          } cursor-pointer col-span-3 lg:col-span-1 font-sans self-center text-center`}
        >
          <h2 className="self-center w-full">All</h2>
        </div>
        <div
          onClick={() => setSelect("Breakfast")}
          className={`${
            select === "Breakfast"
              ? "bg-lightBlue lg:border-solid lg:border-blue lg:border-b-4 lg:bg-lightPink"
              : "bg-lightPink"
          } cursor-pointer font-sans self-center text-center`}
        >
          <h2 className="self-center">Breakfast</h2>
        </div>
        <div
          onClick={() => setSelect("Mains")}
          className={`${
            select === "Mains"
              ? "bg-lightBlue lg:border-solid lg:border-blue lg:border-b-4 lg:bg-lightPink"
              : "bg-lightPink"
          } cursor-pointer font-sans self-center text-center`}
        >
          <h2 className="self-center">Mains</h2>
        </div>
        <div
          onClick={() => setSelect("Dessert")}
          className={`${
            select === "Dessert"
              ? "bg-lightBlue lg:border-solid lg:border-blue lg:border-b-4 lg:bg-lightPink"
              : "bg-lightPink"
          } cursor-pointer font-sans self-center text-center`}
        >
          <h2 className="self-center">Desserts</h2>
        </div>
        <div
          onClick={() => setSelect("Small Bites")}
          className={`${
            select === "Small Bites"
              ? "bg-lightBlue lg:border-solid lg:border-blue lg:border-b-4 lg:bg-lightPink"
              : "bg-lightPink"
          } cursor-pointer font-sans self-center text-center`}
        >
          <h2 className="self-center">Small Bites</h2>
        </div>
        <div
          onClick={() => setSelect("Soups & Salads")}
          className={`${
            select === "Soups & Salads"
              ? "bg-lightBlue lg:border-solid lg:border-blue lg:border-b-4 lg:bg-lightPink"
              : "bg-lightPink"
          } cursor-pointer font-sans self-center text-center`}
        >
          <h2 className="self-center">Soups/Salads</h2>
        </div>
        <div
          onClick={() => setSelect("Sauces")}
          className={`${
            select === "Sauces"
              ? "bg-lightBlue lg:border-solid lg:border-blue lg:border-b-4 lg:bg-lightPink"
              : "bg-lightPink"
          } cursor-pointer font-sans self-center text-center`}
        >
          <h2 className="self-center">Sauces</h2>{" "}
        </div>
      </StyledMenu>
      <StyledNav className="w-full h-12 md:h-16 flex items-center text-lg md:text-xl mt-8">
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

const StyledMenu = styled.div`
  div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0;

    @media (min-width: 1024px) {
      &:hover {
        background: ${Colors.lightBlue};
      }
    }
  }
`;

const StyledNav = styled.div`
  position: relative;
  margin-bottom: 80px;
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
