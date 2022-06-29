import { useContext } from "react";
import styled from "styled-components";
import { colors } from "../../../common/styles";
import { WeekContex } from "../../../components/WeekContext";
import ChangeWeekButton from "./components/ChangeWeekButton";

const WeekContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-left: 135px; */
`;
const WeekTitle = styled.p`
  color: ${colors.secondaryColor};
  font-size: 35px;
  margin: 0 45px;
  width: 133px;
`;

const Week = () => {
  const { week, setWeek } = useContext(WeekContex);
  let countWeek = week;
  const handleChangeWeek = direction => {
    if (direction === "back" && week !== 1) {
      countWeek -= 1;
      setWeek(countWeek);
    }

    if ((direction === "forward") & (week !== 12)) {
      countWeek += 1;
      setWeek(countWeek);
    }
  };
  return (
    <WeekContainer>
      {week !== 1 && (
        <ChangeWeekButton
          handleClick={() => {
            handleChangeWeek("back");
          }}
          type="back"
        />
      )}

      <WeekTitle
        style={{
          marginLeft: week === 1 && "70px",
          marginRight: week === 12 && "70px",
        }}>
        Week {week}
      </WeekTitle>
      {week !== 12 && (
        <ChangeWeekButton
          handleClick={() => {
            handleChangeWeek("forward");
          }}
          type="forward"
        />
      )}
    </WeekContainer>
  );
};

export default Week;
