import { Icon } from "@mui/material";
import styled from "styled-components";
import { colors, sizes } from "../../../../common/styles";
import shakeImg from "./img/shake.png";

const DayBlockContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 92px;
  background-color: ${colors.primaryBackground};
  border-bottom: 2px solid ${colors.mainBorderColor};
  background-image: ${props =>
    props.background ? `url(${shakeImg})` : "none"};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  font-weight: ${props => props.hover};

  /* border-right: ${props => props.border}; */
`;

const Title = styled.p`
  color: ${colors.primaryColor};
  font-size: ${sizes.smallFontSize};
  margin: 14px 5px 0 14px;
`;

const DayBlockContent = ({ background, title, check }) => {
  return (
    <DayBlockContentContainer background={background}>
      <Title>{title}</Title>
      {check && (
        <Icon
          sx={{
            color: colors.secondaryColor,
          }}>
          check
        </Icon>
      )}
    </DayBlockContentContainer>
  );
};

export default DayBlockContent;