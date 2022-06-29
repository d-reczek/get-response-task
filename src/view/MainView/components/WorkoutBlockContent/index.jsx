import { Icon } from "@mui/material";
import styled from "styled-components";
import { colors, sizes } from "../../../../common/styles";
import logo from "./img/workout.png";
const WorkoutBlockContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: 41px;
  background-color: ${colors.thirdColor};
  /* border-right: 2px solid ${colors.mainBorderColor}; */
`;

const Img = styled.img``;
const WorkoutBlockContent = () => {
  return (
    <WorkoutBlockContentContainer>
      <Img src={logo} />
      <Icon sx={{ fontSize: sizes.smallFontSize, marginRight: "-10px" }}>
        check
      </Icon>
    </WorkoutBlockContentContainer>
  );
};

export default WorkoutBlockContent;
