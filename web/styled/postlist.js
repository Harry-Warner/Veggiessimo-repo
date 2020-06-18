import styled from "styled-components";

const PostList = styled.ul`
  width: 100%;
  margin: 0.625rem auto;
  display: grid;
  grid-gap: ${(props) => (props.community ? 0 : "2rem")};
  grid-template-columns: ${(props) => (props.community ? "1fr 1fr" : "1fr")};

  @media (min-width: 48rem) {
    grid-template-columns: ${(props) =>
      props.community ? "1fr 1fr 1fr" : "1fr 1fr"};
    grid-gap: 2rem;
    margin: ${(props) => (props.community ? "3.125rem auto" : "2rem")};
    width: calc(100% - 4rem);
  }

  @media (min-width: 64rem) {
    grid-gap: 3rem;
    margin: 3rem;
    width: calc(100% - 6rem);
  }
`;

export default PostList;
