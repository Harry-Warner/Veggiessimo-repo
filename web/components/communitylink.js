import styled from "styled-components";
import colors from "../styled/colors";

const CommunityLink = () => {
  return (
    <div className="block w-full">
      <SectionOne className="w-full h-48 bg-cover bg-center">
        <p className="font-script text-big ml-2">Community</p>
        <Text1 className="text-xs text-center uppercase">
          Discover more in store
        </Text1>
      </SectionOne>
      <SectionTwo className="h-40 flex justify-end items-center bg-cover bg-center">
        <p className="font-script text-center text-vbig leading-10 mr-8">
          Bon
          <br />
          Apetit!
        </p>
      </SectionTwo>
    </div>
  );
};

const SectionOne = styled.div`
  background-image: url("images/street19.jpg");
  display: grid;
  grid-template: 50% 50% / 50% 50%;
`;

const Text1 = styled.p`
  font-family: "Fira Sans", sans-serif;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;

const SectionTwo = styled.div`
  background-image: url("images/street29.jpg");
`;

export default CommunityLink;
