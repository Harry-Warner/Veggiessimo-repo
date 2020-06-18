import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  position: relative;
  margin: 0 auto;
  min-height: 100vh;
  padding-bottom: 7.625rem;
  z-index: 0;

  @media (min-width: 40rem) {
    max-width: 40rem;
  }
  @media (min-width: 48rem) {
    max-width: 48rem;
    padding-bottom: 13.875rem;
  }
  @media (min-width: 64rem) {
    max-width: 64rem;
  }
`;

export default Container;
