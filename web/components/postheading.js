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
        className="w-9/12 md:w-2/3 lg:w-1/2 mx-auto flex justify-center"
      >
        <StyledFace />
        <a href="https://www.instagram.com/veggiessimo.au/">
          <StyledInst />
        </a>
        <StyledPin />
      </StyledSocial>
    </>
  );
};

const StyledSocial = styled.div`
  border-top: ${(props) =>
    props.community ? `2px solid ${Colors.blue}` : "none"};
  border-bottom: ${(props) =>
    props.community ? `2px solid ${Colors.blue}` : "none"};
`;

const StyledInst = styled(Instagram)`
  width: 2rem;
  height: 2rem;
  margin: 10px;
`;
const StyledFace = styled(Facebook)`
  width: 2rem;
  height: 2rem;
  margin: 10px;
`;
const StyledPin = styled(PinterestWithCircle)`
  width: 2rem;
  height: 2rem;
  margin: 10px;
`;

export default PostHeading;
