import styled from "styled-components";
import DaysBlockFree from "./DayBlockFree";
import DaysBlocks from "./DaysBlocks";
import TimeBlocks from "./TimeBlocks";

const MainViewContainer = styled.main`
  display: flex;
  margin-bottom: 8px;
`;
const MainView = () => {
  return (
    <MainViewContainer>
      <TimeBlocks />
      <DaysBlocks />
      <DaysBlocks />
      <DaysBlocks />
      <DaysBlocks />
      <DaysBlocks />
      <DaysBlocks />
      <DaysBlockFree />
    </MainViewContainer>
  );
};

export default MainView;
