import styled from "styled-components";
import colors from "../styled/colors";

const CommunityLink = () => {
  return (
    <Container>
      <SectionOne className="section">
        <Title>Community</Title>
        <Text1>Discover more in store</Text1>
      </SectionOne>
      <SectionTwo className="section">
        <Text2>
          Bon
          <br />
          Apetit!
        </Text2>
      </SectionTwo>
    </Container>
  );
};

const Container = styled.div`
  display: block;
  height: 100vw;
  width: 100vw;

  .section {
    width: 100%;
  }
`;

const SectionOne = styled.div`
  background: ${colors.green};
  height: 52%;
  display: grid;
  grid-template: 50% 50% / 50% 50%;
`;

const SectionTwo = styled.div`
  display: flex;
  background: ${colors.lightBlue};
  height: 48%;
  justify-content: flex-end;
  align-items: center;
`;

const Title = styled.p`
  font-family: "playlist-script";
  font-size: 8vw;
  padding-left: 6vw;
`;

const Text1 = styled.p`
  font-family: "Fira Sans", sans-serif;
  font-size: 3vw;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  text-align: right;
  padding-right: 12vw;
  text-transform: uppercase;
`;

const Text2 = styled.p`
  font-family: "playlist-script";
  height: fit-content;
  margin-right: 12vw;
  font-size: 12vw;
  line-height: 10vw;
  text-align: center;
`;

export default CommunityLink;
