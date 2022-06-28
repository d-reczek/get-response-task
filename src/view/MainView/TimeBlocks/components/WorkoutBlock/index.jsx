import { Icon } from "@mui/material";
import styled from "styled-components";
import { sizes, colors } from "../../../../../common/styles";

const SmallBlockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 41px;
  background-color: ${colors.thirdColor};
  border-radius: 0 0 0 ${sizes.primaryBorderRadius};
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  font-size: ${sizes.smallFontSize};
`;

const WorkoutBlock = ({ position }) => {
  return (
    <SmallBlockContainer position={position}>
      <TextContainer>
        Workout
        <Icon sx={{ fontSize: "10px" }}>arrow_right</Icon>
      </TextContainer>
    </SmallBlockContainer>
  );
};

export default WorkoutBlock;
