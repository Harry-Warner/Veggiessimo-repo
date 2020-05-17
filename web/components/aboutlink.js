import styled from "styled-components";

const AboutLink = () => {
  return (
    <div className="flex justify-end items-center bg-lightBlue w-full h-48">
      <TextBox className="w-32 h-32 mr-4">
        <Text1 className="line text-xxl w-full mt-5">Cook with us</Text1>
        <Text2 className="line text-xxs w-full">FIND OUT MORE</Text2>
      </TextBox>
    </div>
  );
};

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(217, 232, 146, 0.75);
`;

const Text1 = styled.div`
  font-family: "playlist-script";
  text-align: center;
`;

const Text2 = styled.div`
  font-family: "Fira Sans", sans-serif;
  text-align: center;
`;

export default AboutLink;
