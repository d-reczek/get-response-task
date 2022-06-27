import styled from "styled-components";
import { colors } from "../../../common/styles";
import ChangeWeekButton from "./components/ChangeWeekButton";

const WeekContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WeekTitle = styled.p`
  color: ${colors.secondaryColor};
  font-size: 35px;
  margin: 0 45px;
`;

const Week = () => {
  return (
    <WeekContainer>
      <ChangeWeekButton type={"back"} />
      <WeekTitle>Week</WeekTitle>
      <ChangeWeekButton type={"forward"} />
    </WeekContainer>
  );
};

export default Week;