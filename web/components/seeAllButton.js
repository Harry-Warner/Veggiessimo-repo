import React from "react";
import Link from "next/link";
import styled from "styled-components";

const SeeAll = (props) => {
  return (
    <Link href={props.url}>
      <StyledLink href={props.url}>
        <>
          <p className="mx-auto text-base md:text-xl lg:text-xxl uppercase">
            {props.text}
          </p>
          <hr className="mb-10 mt-1 mx-auto h-0 border-b-2 border-solid" />
        </>
      </StyledLink>
    </Link>
  );
};

const StyledLink = styled.a`
  p {
    width: fit-content;
  }
  hr {
    width: 4.5rem;
    transition: width 0.25s ease-in-out;
  }
  &:hover {
    hr {
      width: 7rem;
    }
  }
`;

export default SeeAll;
