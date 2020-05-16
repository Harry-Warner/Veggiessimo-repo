import styled from "styled-components";
import Colors from "../styled/colors";
import { Component } from "react";

class AboutLink extends Component {
  constructor() {
    super();
    this.state = { width: 0 };
  }
  updateDimensions() {
    let updateWidth = Math.min(window.innerWidth, 1024);
    this.setState({ width: updateWidth });
    // console.log just to check it works
    console.log(this.state.width);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    return (
      <ImgBanner>
        <TextBox>
          <div className="columns">
            <div className="line"></div>
            <Text1 className="line">Cook with us</Text1>
            <Text2 className="line">FIND OUT MORE</Text2>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </TextBox>
      </ImgBanner>
    );
  }
}

// intention below would be to use a function of this.state.width for each width and height
// in the elements instead of using vw. Can I pass this in with props? Reason being
// I would like them all to change depending on device width but then the container
// itself have a max width of 1024 (hence the 1024 in the Math.min() function).

const ImgBanner = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${Colors.lightBlue};
  height: 50vw;
  width: 100vw;
`;

const tbs = 35;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: ${tbs}vw;
  height: ${tbs}vw;
  margin-right: 5vw;
  background: rgba(217, 232, 146, 0.75);

  .line {
    width: 100%;
    height: calc(${tbs}vw / 5);
  }
`;

const Text1 = styled.div`
  font-size: 6vw;
  font-family: "playlist-script";
  text-align: center;
`;

const Text2 = styled.div`
  font-size: 2vw;
  font-family: "Fira Sans", sans-serif;
  text-align: center;
  line-height: calc(${tbs}vw / 5);
`;

export default AboutLink;
