import styled from "styled-components";
import DaysBlocks from "./DaysBlocks";
import TimeBlocks from "./TimeBlocks";

const MainViewContainer = styled.main`
  display: flex;
  width: 791px;
  height: 193px;
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
      <DaysBlocks />
    </MainViewContainer>
  );
};

export default MainView;
