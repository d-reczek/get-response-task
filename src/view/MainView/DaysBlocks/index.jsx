import { colors } from "../../../common/styles";
import CarbonBlockContent from "./components/CarbonBlockContent";
import DayBlockContent from "./components/DayBlockContent";
import WorkoutBlockContent from "./components/WorkoutBlockContent";

const DaysBlocks = () => {
  return (
    <>
      <DayBlockContent title="Bod &#183;e shake" />
      <DayBlockContent />
      <DayBlockContent />
      <DayBlockContent />
      <DayBlockContent />
      <CarbonBlockContent />
      <WorkoutBlockContent />
    </>
  );
};

export default DaysBlocks;
