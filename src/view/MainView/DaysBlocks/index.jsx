import styled from "styled-components";
import { colors } from "../../../common/styles";
import CarbonBlockContent from "./components/CarbonBlockContent";
import DayBlockContent from "./components/DayBlockContent";
import DayBlockTitle from "./components/DayBlockTitle";
import WorkoutBlockContent from "./components/WorkoutBlockContent";
const DaysBlocksContainer = styled.div`
  width: 128px;
`;

const DaysBlocks = () => {
  const border = {
    border: `2px solid ${colors.dayBlockBorderColor}`,
    noBorder: "none",
  };

  return (
    <DaysBlocksContainer>
      <DayBlockTitle />
      <DayBlockContent border={border.border} />
      <DayBlockContent border={border.border} />
      <DayBlockContent border={border.border} />
      <DayBlockContent border={border.border} />
      <DayBlockContent border={border.noBorder} />
      <CarbonBlockContent />
      <WorkoutBlockContent />
    </DaysBlocksContainer>
  );
};

export default DaysBlocks;
