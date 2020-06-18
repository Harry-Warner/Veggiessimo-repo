import React from "react";
import styled from "styled-components";
import Colors from "../styled/colors";
import { Instagram } from "@styled-icons/entypo-social/Instagram";
import { Facebook } from "@styled-icons/entypo-social/Facebook";
import { PinterestWithCircle } from "@styled-icons/entypo-social/PinterestWithCircle";

const PostHeading = (props) => {
  return (
    <>
      <h2 className="text-lg lg:text-xxxl text-center font-sans uppercase pt-4 pb-1 lg:mt-16">
        {props.category}
      </h2>
      <h1 className="text-big md:text-huge lg:text-vhuge text-center py-1 font-script">
        {props.title}
      </h1>
      <h3 className="text-sm md:text-base md:text-xl text-center font-sans py-1">
        By {props.name}
      </h3>
      <StyledSocial
        community={props.community}
        className="w-2/3 md:1/2 lg:w-1/3 mx-auto flex justify-center"
      >
        <a href="https://www.facebook.com/veggiessimo/">
          <StyledFace />
        </a>
        <a href="https://www.instagram.com/veggiessimo.au/">
          <StyledInst />
        </a>
        <StyledPin />
      </StyledSocial>
    </>
  );
};

const StyledSocial = styled.div`
  border-top: 2px solid ${Colors.blue};
  border-bottom: 2px solid ${Colors.blue};
  margin-bottom: ${(props) => (props.community ? "0.3125rem" : "1rem")};
`;

const StyledInst = styled(Instagram)`
  width: 2rem;
  height: 2rem;
  margin: 0.625rem;
`;
const StyledFace = styled(Facebook)`
  width: 2rem;
  height: 2rem;
  margin: 0.625rem;
`;
const StyledPin = styled(PinterestWithCircle)`
  width: 2rem;
  height: 2rem;
  margin: 0.625rem;
`;

export default PostHeading;
