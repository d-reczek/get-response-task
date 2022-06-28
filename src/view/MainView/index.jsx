import styled from "styled-components";
import TimeBlocks from "./TimeBlocks";

const MainViewContainer = styled.main`
  width: 791px;
  height: 193px;
`;
const MainView = () => {
  return (
    <MainViewContainer>
      <TimeBlocks />
    </MainViewContainer>
  );
};

export default MainView;
