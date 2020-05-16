import styled from "styled-components";

const RecipesLink = () => {
  return (
    <PaintSwipe>
      <Title1 className="text">Recipes</Title1>
      <Title2 className="text">DIG IN</Title2>
    </PaintSwipe>
  );
};

const PaintSwipe = styled.div`
  margin-top: 10px;
  margin-left: -15px;
  width: 100vw;
  height: 12vw;
  background-image: url("/images/brush-stroke2.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0% 42%;
  display: flex;

  .text {
    line-height: 12vw;
  }
`;

const Title1 = styled.p`
  margin-left: 25px;
  font-size: 8vw;
  font-family: "playlist-script";
`;

const Title2 = styled.p`
  margin-left: 5px;
  font-size: 2vw;
  padding-top: 3vw;
  font-family: "Fira Sans", sans-serif;
`;

export default RecipesLink;
