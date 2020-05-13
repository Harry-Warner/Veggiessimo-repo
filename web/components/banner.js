import styled from "styled-components";
import banner from "../images/banner.png";

const Banner = () => {
  return <StyledBanner src={banner} />;
};

const StyledBanner = styled.img`
  width: 100vw;
  margin-top: 30px;
`;

export default Banner;
