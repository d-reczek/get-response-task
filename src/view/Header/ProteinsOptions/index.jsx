import styled from "styled-components";
import { device } from "../../../common/deviceBreakPoints";
import { colors, sizes } from "../../../common/styles";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";

const images = [img1, img2, img3, img4, img5];

const ProteinsOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProteinsOptionsTitle = styled.p`
  width: 100%;
  text-transform: uppercase;
  color: ${colors.primaryColor};
  font-size: ${sizes.smallFontSize};
  @media ${device.tabletXL} {
    text-align: center;
  }
`;
const Image = styled.img`
  width: 25px;
  height: 25px;
  margin: 15px 7.5px;
  cursor: pointer;
  :hover {
    filter: invert(56%) sepia(80%) saturate(1991%) hue-rotate(347deg)
      brightness(101%) contrast(101%);
  }
`;
const ImagesContainer = styled.div`
  display: flex;
`;
const ProteinsOptions = () => {
  return (
    <ProteinsOptionsContainer>
      <ProteinsOptionsTitle>Select your protein options</ProteinsOptionsTitle>
      <ImagesContainer>
        {images.map(img => (
          <Image key={img} alt="food images" src={img} />
        ))}
      </ImagesContainer>
    </ProteinsOptionsContainer>
  );
};

export default ProteinsOptions;
