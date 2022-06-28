import styled from "styled-components";
import LargeBlock from "./components/LargeBlock";
import SmallBlock from "./components/SmallBlock";

const TimeBlocksContainer = styled.div`
  width: 85px;
  /* margin-top: 41px; */
`;
const TimeBlocks = () => {
  const blokPosition = {
    top: "flex-start",
    bottom: "flex-end",
  };

  return (
    <TimeBlocksContainer>
      <LargeBlock position={blokPosition.bottom} time="6:00" timeTag="AM" />
      <SmallBlock time="9:00" timeTag="AM" />
      <SmallBlock time="12:00" timeTag="PM" />
      <SmallBlock time="3:00" timeTag="PM" />
      <LargeBlock position={blokPosition.bottom} time="6:00" timeTag="PM" />
    </TimeBlocksContainer>
  );
};

export default TimeBlocks;
