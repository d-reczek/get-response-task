import styled from "styled-components";
import LargeBlock from "../LargeBlock";

const TimeBlocksContainer = styled.div`
  width: 85px;
`;
const TimeBlocks = () => {
  const blokPosition = {
    top: "flex-start",
    bottom: "flex-end",
  };

  return (
    <TimeBlocksContainer>
      <LargeBlock position={blokPosition.bottom} time="6:00" timeTag="AM" />
    </TimeBlocksContainer>
  );
};

export default TimeBlocks;
