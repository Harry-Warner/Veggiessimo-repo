import styled from "styled-components";

const RecipeList = styled.ul`
  width: 100%;
  margin: 10px auto;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    margin: 2rem;
    width: calc(100% - 4rem);
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    margin: 3rem;
    width: calc(100% - 6rem);
  }
`;

export default RecipeList;
