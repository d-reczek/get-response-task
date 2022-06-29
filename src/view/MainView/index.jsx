import { useContext } from "react";
import styled from "styled-components";
import { colors, sizes } from "../../common/styles";
import { WeekContex } from "../../components/WeekContext";
import DayBlockTitle from "./components/DayBlockTitle";
import DaysBlockFree from "./DayBlockFree";
import DayBlockContent from "./components/DayBlockContent";
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
  const monday = ["testa", "test2b", "test3c", "test4d", "test5e"];
  const tuesday = ["test", "test2", "test3", "test4", "test5"];
  const wednesday = ["test", "test2", "test3", "test4", "test5"];
  const thursday = ["test", "test2", "test3", "test4", "test5"];
  const friday = ["test", "test2", "test3", "test4", "test5"];
  const saturday = ["test", "test2", "test3", "test4", "test5"];
  let daysArray = [];
  let freeDay;
  const generateDays = () => {
    let lastDay = week * 7;
    let firstDay = lastDay - 6;
    for (let i = firstDay; i <= lastDay; i++) {
      freeDay = daysArray.length;
      daysArray.push(i);
    }
    console.log("free", daysArray);
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

              {day === daysArray[0] &&
                monday.map(item => <DayBlockContent key={item} title={item} />)}
              {day === daysArray[1] &&
                tuesday.map(item => (
                  <DayBlockContent key={item} title={item} />
                ))}
              {day === daysArray[2] &&
                wednesday.map(item => (
                  <DayBlockContent key={item} title={item} />
                ))}
              {day === daysArray[3] &&
                thursday.map(item => (
                  <DayBlockContent key={item} title={item} />
                ))}
              {day === daysArray[4] &&
                friday.map(item => <DayBlockContent key={item} title={item} />)}
              {day === daysArray[5] &&
                saturday.map(item => (
                  <DayBlockContent key={item} title={item} />
                ))}
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
