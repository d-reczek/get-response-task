import { useContext } from "react";
import styled from "styled-components";
import { colors, sizes } from "../../common/styles";
import { WeekContex } from "../../components/WeekContext";
import DayBlockTitle from "./components/DayBlockTitle";
import DaysBlockFree from "./DayBlockFree";
import DayBlockContent from "./components/DayBlockContent";
import TimeBlocks from "./TimeBlocks";
import CarbonBlockContent from "./components/CarbonBlockContent";
import WorkoutBlockContent from "./../MainView/components/WorkoutBlockContent";
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
  const monday = [
    "Bode Shake",
    "Ham and Swiss Roll Ups",
    "Turkey Melt",
    "Bode Burn with Mozzarella and Tomato Slices",
    "Turkey Melt",
  ];
  const tuesday = [
    "Bode Shake",
    "Ham and Swiss Roll Ups",
    "Turkey Melt",
    "Bode Burn with Mozzarella and Tomato Slices",
    "Turkey Melt",
  ];
  const wednesday = [
    "Bode Shake",
    "Grilled Steak (HC)",
    "Bode Shake",
    "Bode Burn and Whole-Wheat English Muffin with Butter Spray",
    "Garlic Lime Chicken (HC)",
  ];
  const thursday = [
    "Bode Shake",
    "Ham and Swiss Roll Ups",
    "Turkey Melt",
    "Bode Burn with Mozzarella and Tomato Slices",
    "Turkey Melt",
  ];
  const friday = [
    "Bode Shake",
    "Ham and Swiss Roll Ups",
    "Bode Shake",
    "Bode Burn with Mozzarella and Tomato Slices",
    "Turkey Melt",
  ];
  const saturday = [
    "Bode Shake",
    "Grilled Steak (HC)",
    "Bode Shake",
    "Bode Burn and Whole-Wheat English Muffin with Butter Spray",
    "Garlic Lime Chicken (HC)",
  ];
  let daysArray = [];
  let freeDay;
  const generateDays = () => {
    let lastDay = week * 7;
    let firstDay = lastDay - 6;
    for (let i = firstDay; i <= lastDay; i++) {
      freeDay = daysArray.length;
      daysArray.push(i);
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

              {day === daysArray[0] &&
                monday.map(item => (
                  <DayBlockContent
                    check={true}
                    background={item === "Bode Shake" ? true : false}
                    key={monday[item]}
                    title={item}
                  />
                ))}
              {day === daysArray[1] &&
                tuesday.map(item => (
                  <DayBlockContent
                    background={item === "Bode Shake" ? true : false}
                    key={monday[item]}
                    title={item}
                  />
                ))}
              {day === daysArray[2] &&
                wednesday.map(item => (
                  <DayBlockContent
                    background={item === "Bode Shake" ? true : false}
                    key={monday[item]}
                    title={item}
                  />
                ))}
              {day === daysArray[3] &&
                thursday.map(item => (
                  <DayBlockContent
                    background={item === "Bode Shake" ? true : false}
                    key={monday[item]}
                    title={item}
                  />
                ))}
              {day === daysArray[4] &&
                friday.map(item => (
                  <DayBlockContent
                    background={item === "Bode Shake" ? true : false}
                    key={monday[item]}
                    title={item}
                  />
                ))}
              {day === daysArray[5] &&
                saturday.map(item => (
                  <DayBlockContent
                    background={item === "Bode Shake" ? true : false}
                    key={monday[item]}
                    title={item}
                  />
                ))}
              <CarbonBlockContent />
              <WorkoutBlockContent />
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
