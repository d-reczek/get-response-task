import styled from "styled-components";
import { colors, sizes } from "../../../../common/styles";
import shakeImg from "./img/shake.png";
const DayBlockContentContainer = styled.div`
  display: flex;
  height: 92px;
  background-color: ${colors.primaryBackground};
  border-bottom: 2px solid ${colors.mainBorderColor};
  background-image: ${props =>
    props.background ? `url(${shakeImg})` : "none"};
  background-size: contain;
  background-repeat: no-repeat;

  /* border-right: ${props => props.border}; */
`;

const Title = styled.p`
  color: ${colors.primaryColor};
  font-size: ${sizes.smallFontSize};
  margin: 14px;
`;

const DayBlockContent = ({ background, title }) => {
  return (
    <DayBlockContentContainer background={background}>
      <Title>{title}</Title>
    </DayBlockContentContainer>
  );
};

export default DayBlockContent;
