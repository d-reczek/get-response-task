import styled from "styled-components";
import { colors, sizes } from "../../../common/styles";
import DayBlockTitle from "../components/DayBlockTitle";
import DayBlockFreeContent from "./components/DayBlockFreeContent";
import PrintBlock from "./components/PrintBlock";
const DaysBlockFreeContainer = styled.div`
  width: 128px;
  :hover {
    border: 2px solid ${colors.secondaryColor};
    margin-top: -2px;
    margin-left: -2px;
    margin-bottom: -2px;
  }
`;

const DaysBlockFree = () => {
  return (
    <DaysBlockFreeContainer>
      <DayBlockTitle
        noBorder="none"
        borderRadius={`0 ${sizes.primaryBorderRadius} 0 0`}
      />
      <DayBlockFreeContent />
      <PrintBlock />
    </DaysBlockFreeContainer>
  );
};

export default DaysBlockFree;
