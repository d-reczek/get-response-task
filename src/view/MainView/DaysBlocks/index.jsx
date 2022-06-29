import styled from "styled-components";
import { colors } from "../../../common/styles";
import DayBlockTitle from "../components/DayBlockTitle";
import CarbonBlockContent from "./components/CarbonBlockContent";
import DayBlockContent from "./components/DayBlockContent";
import WorkoutBlockContent from "./components/WorkoutBlockContent";

const DaysBlocks = () => {
  const border = {
    border: `2px solid ${colors.mainBorderColor}`,
  };

  return (
    <>
      <DayBlockContent border={border.border} />
      <DayBlockContent border={border.border} />
      <DayBlockContent border={border.border} />
      <DayBlockContent border={border.border} />
      <DayBlockContent border={border.border} />
      <CarbonBlockContent />
      <WorkoutBlockContent />
    </>
  );
};

export default DaysBlocks;
