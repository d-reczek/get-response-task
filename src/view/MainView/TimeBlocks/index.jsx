import styled from "styled-components";
import { sizes } from "../../../common/styles";
import LargeBlock from "./components/LargeBlock";
import SmallBlock from "./components/SmallBlock";
import WorkoutBlock from "./components/WorkoutBlock";

const TimeBlocksContainer = styled.div`
  width: 85px;
`;
const TimeBlocks = () => {
  const blockStyles = {
    top: "flex-start",
    bottom: "flex-end",
    borderRadiusTop: `${sizes.primaryBorderRadius} 0 0 0 `,
    heightLarge: "144px",
    heightSmall: "129px",
  };

  return (
    <TimeBlocksContainer>
      <LargeBlock
        height={blockStyles.heightLarge}
        borderRadius={blockStyles.borderRadiusTop}
        position={blockStyles.bottom}
        time="6:00"
        timeTag="AM"
      />
      <SmallBlock time="9:00" timeTag="AM" />
      <SmallBlock time="12:00" timeTag="PM" />
      <SmallBlock time="3:00" timeTag="PM" />
      <LargeBlock
        height={blockStyles.heightSmall}
        position={blockStyles.top}
        time="6:00"
        timeTag="PM"
      />
      <WorkoutBlock />
    </TimeBlocksContainer>
  );
};

export default TimeBlocks;
