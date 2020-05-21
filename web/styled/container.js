import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  position: relative;
  margin: 0 auto;
  min-height: 100vh;
  padding-bottom: 122px;
  z-index: 0;

  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
    padding-bottom: 222px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
`;

export default Container;
