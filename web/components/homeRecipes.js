import React from "react";
import Link from "next/link";
import styled from "styled-components";

const HomeRecipes = (props) => {
  return (
    <li className="my-4 sm:my-6 lg:my-8">
      <Link href="/recipes">
        <a href="/recipes">
          <div className="relative overflow-hidden mx-auto w-full md:w-11/12 lg:w-9/12">
            <StyledLabel className="z-10 absolute bg-lightPink">
              <div className="absolute text-right space-y-1 md:space-y-2">
                <h3 className="uppercase tracking-wider text-sm md:text-base">
                  {props.title}
                </h3>
                <h4 className="font-script text-big md:text-vbig">
                  {props.recipe}
                </h4>
              </div>
            </StyledLabel>
            <img
              className="relative z-0 h-56 md:h-108 w-full object-cover object-center"
              src={props.image}
              alt={props.recipe}
            />
          </div>
        </a>
      </Link>
    </li>
  );
};

const StyledLabel = styled.div`
  height: 11rem;
  width: 45rem;
  bottom: -6.5rem;
  right: -1rem;
  /* box-shadow: 0 0 3px 2px rgba(239, 225, 232, 0.75); */
  transform: rotate(-5deg);
  div {
    transform: rotate(5deg);
    right: 1.5rem;
    top: 0.75rem;
  }
  @media (min-width: 48rem) {
    height: 20rem;
    width: 55rem;
    bottom: -12.5rem;
    right: -1.25rem;
    div {
      top: 1.5rem;
    }
  }
`;

export default HomeRecipes;
