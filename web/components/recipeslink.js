import styled from "styled-components";
import Colors from "../styled/colors";

const RecipesLink = () => {
  return (
    <PaintSwipe>
      <Title1 className="text">Recipes</Title1>
      <Title2 className="text">DIG IN</Title2>
    </PaintSwipe>
  );
};

const PaintSwipe = styled.div`
  margin-top: 20px;
  width: 100vw;
  height: 12vw;
  background: ${Colors.lightPink};
  display: flex;

  .text {
    line-height: 12vw;
    margin: 0 5px;
  }
`;

const Title1 = styled.p`
  font-size: 8vw;
  font-family: "playlist-script";
`;

const Title2 = styled.p`
  font-size: 2vw;
  padding-top: 2vw;
  font-family: "Fira Sans", sans-serif;
`;

export default RecipesLink;
