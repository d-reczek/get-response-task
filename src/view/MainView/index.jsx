import { useContext, useEffect } from "react";
import styled from "styled-components";
import { colors, sizes } from "../../common/styles";
import { WeekContex } from "../../components/WeekContext";
import DayBlockTitle from "./components/DayBlockTitle";
import DaysBlockFree from "./DayBlockFree";
import DaysBlocks from "./DaysBlocks";
import TimeBlocks from "./TimeBlocks";
const MainViewContainer = styled.main`
  display: flex;
  margin-bottom: 8px;
`;

const DaysBlocksContainer = styled.div`
  width: 128px;
  border-right: 2px solid ${colors.mainBorderColor};

  :hover {
    width: 130px;
    border: 2px solid ${colors.secondaryColor};
    margin-top: -2px;
    margin-left: -2px;
    margin-bottom: -2px;
  }
`;
const DaysBlockFreeContainer = styled.div`
  width: 128px;
  border-right: 2px solid ${colors.footerBackground};

  :hover {
    width: 130px;
    border: 2px solid ${colors.secondaryColor};
    margin-top: -2px;
    margin-left: -2px;
    margin-bottom: -2px;
  }
`;

const MainView = () => {
  const { week } = useContext(WeekContex);
  let daysArray = [];
  let freeDay;
  const generateDays = () => {
    if (week === 1) {
      for (let i = 1; i <= 7; i++) {
        freeDay = daysArray.length;
        daysArray.push(i);
      }
    } else {
      let lastDay = week * 7;
      let firstDay = lastDay - 6;
      for (let i = firstDay; i <= lastDay; i++) {
        freeDay = daysArray.length;
        daysArray.push(i);
      }
    }
  };

  generateDays();
  return (
    <MainViewContainer>
      <TimeBlocks />
      {daysArray.map(
        day =>
          day !== daysArray[freeDay] && (
            <DaysBlocksContainer key={day}>
              <DayBlockTitle day={day} />
              <DaysBlocks />
            </DaysBlocksContainer>
          )
      )}
      <DaysBlockFreeContainer>
        <DayBlockTitle
          borderRadius={`0 ${sizes.primaryBorderRadius} 0 0`}
          day={daysArray[freeDay]}
        />
        <DaysBlockFree />
      </DaysBlockFreeContainer>
    </MainViewContainer>
  );
};

export default MainView;
