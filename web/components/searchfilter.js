import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CheckIcon from "@material-ui/icons/Check";
import SearchIcon from "@material-ui/icons/Search";
import AutosizeInput from "react-input-autosize";
import Colors from "../styled/colors";
import { func, array } from "prop-types";
import MealTitle from "../components/mealtitle";
import ToggleInfo from "./toggleinfo";

const SearchFilter = ({ posts, setSearchPosts }) => {
  const [vopen, setVOpen] = useState(false);
  const [gopen, setGOpen] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [foodType, setFoodType] = useState(filteredPosts);
  const [value, setValue] = useState("");
  const [select, setSelect] = useState(null);
  const [open, setOpen] = useState(false);

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

  // listen to value changes while passing through the final filter
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
      <MealTitle
        title={`${select ? select : "Recipes"}`}
        description={`${
          select
            ? posts.filter((post) => post.mealType[0] === select)[0].mealTypeSub
            : "Checkout out our recipes, from Breakfasts to start your day right, to sauces that can make anything taste good!"
        }`}
      />
      <div className="relative">
        <StyledToggle
          open={open}
          onClick={() => setOpen(!open)}
          className="absolute w-full text-center flex justify-center lg:hidden bg-lightPink py-2 cursor-pointer"
        >
          <h2 className="text-center text-lg">Choose Meal</h2>
          <div className="relative mx-2">
            <ToggleInfo open={open} setOpen={setOpen} />
          </div>
        </StyledToggle>
        <StyledMenu
          open={open}
          className="text-base lg:text-xl grid gap-1 lg:gap-0 grid-cols-3 grid-rows-2 lg:grid-rows-1 lg:grid-cols-7"
        >
          <div
            onClick={() => setSelect(null)}
            className={`all ${
              select ? "" : "lg:border-b-4"
            } border-solid border-blue bg-lightPinkT cursor-pointer col-span-1 font-sans self-center text-center`}
          >
            <h2 className="self-center w-full">All</h2>
          </div>
          <div
            onClick={() => setSelect("Breakfast")}
            className={`${
              select === "Breakfast" ? "lg:border-b-4" : ""
            } bg-lightBlueT lg:border-solid lg:border-blue  lg:bg-lightPinkT cursor-pointer font-sans self-center text-center`}
          >
            <h2 className="self-center">Breakfast</h2>
          </div>
          <div
            onClick={() => setSelect("Mains")}
            className={`${
              select === "Mains" ? "lg:border-b-4" : ""
            } bg-lightBlueT lg:border-solid lg:border-blue lg:bg-lightPinkT cursor-pointer font-sans self-center text-center`}
          >
            <h2 className="self-center">Mains</h2>
          </div>
          <div
            onClick={() => setSelect("Dessert")}
            className={`${
              select === "Desserts" ? "lg:border-b-4" : ""
            } bg-lightBlueT lg:border-solid lg:border-blue lg:bg-lightPinkT cursor-pointer font-sans self-center text-center`}
          >
            <h2 className="self-center">Desserts</h2>
          </div>
          <div
            onClick={() => setSelect("Small Bites")}
            className={`${
              select === "Small Bites" ? "lg:border-b-4" : ""
            } bg-lightBlueT lg:border-solid lg:border-blue lg:bg-lightPinkT cursor-pointer font-sans self-center text-center`}
          >
            <h2 className="self-center">Small Bites</h2>
          </div>
          <div
            onClick={() => setSelect("Soups & Salads")}
            className={`${
              select === "Soups & Salads" ? "lg:border-b-4" : ""
            } bg-lightBlueT lg:border-solid lg:border-blue lg:bg-lightPinkT cursor-pointer font-sans self-center text-center`}
          >
            <h2 className="self-center">Soups/Salads</h2>
          </div>
          <div
            onClick={() => setSelect("Sauces")}
            className={`${
              select === "Sauces" ? "lg:border-b-4" : ""
            } bg-lightBlueT lg:border-solid lg:border-blue lg:bg-lightPinkT cursor-pointer font-sans self-center text-center`}
          >
            <h2 className="self-center">Sauces</h2>{" "}
          </div>
        </StyledMenu>
      </div>
      <StyledNav className="w-full h-12 md:h-16 flex items-center text-lg md:text-xl mt-2 md:mt-4 lg:mt-6">
        <StyledButton open={gopen} onClick={() => showGlutenFree()}>
          <div className="circle">
            <CheckIcon className="icon" />
          </div>
          <p className="font-bold">Gluten Free</p>
        </StyledButton>
        <StyledButton open={vopen} onClick={() => showVegan()}>
          <div className="circle">
            <CheckIcon className="icon" />
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
                minWidth: "7.5rem",
                maxWidth: "13.75rem",
                paddingLeft: "0.625rem",
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

const StyledToggle = styled.div`
  top: ${({ open }) => (open ? "-3rem" : "-0.75rem")};
`;

const StyledMenu = styled.div`
  max-height: ${({ open }) => (open ? "10rem" : 0)};
  margin: ${({ open }) => (open ? "4.25rem 0 0" : "2rem 0")};
  font-size: ${({ open }) => (open ? "1rem" : 0)};
  transition: max-height 0.3s, font-size 0.3s;
  div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0;
  }
  .all {
    display: none;
    @media (min-width: 64rem) {
      display: flex;
    }
  }
  @media (min-width: 64rem) {
    max-height: 10rem;
    margin: 0;
    font-size: 1rem;
    div {
      &:hover {
        background: ${Colors.lightBlue};
      }
    }
  }
`;

const StyledNav = styled.div`
  position: relative;
  margin-bottom: 5rem;
  justify-content: space-around;
  .search-wrapper {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    right: 0;
    top: 3.125rem;
    margin-top: 0.625rem;
    .search {
      display: flex;
      width: fit-content;
      padding: 0.3125rem 1rem;
      background: white;
      border: 1px solid black;
    }
  }

  @media (min-width: 48rem) {
    margin-bottom: 0.5rem;
    justify-content: left;
    .search-wrapper {
      top: 0;
      right: 0.625rem;
      width: fit-content;
    }
  }

  @media (min-width: 64rem) {
    .search-wrapper {
      top: 0;
      right: 0.625rem;
      width: fit-content;
    }
  }
`;

const StyledButton = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.78125rem;
  cursor: pointer;

  p {
    font-size: 1.125rem;
    margin-left: 0.125rem;
  }

  .circle {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.625rem;
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
  @media (min-width: 48rem) {
    margin: 0 1rem;
    padding: 0 1rem;

    .circle {
      width: 1.6265rem;
      height: 1.6265rem;
      margin-right: 1rem;

      .icon {
        font-size: 2.5rem;
        top: -50%;
        left: -25%;
      }
    }

    p {
      font-size: 1.5625;
      margin-left: 0.125rem;
    }
  }

  @media (min-width: 64rem) {
    margin: 0 1.875rem;
    padding: 0 1.875rem;
  }
`;

export default SearchFilter;
