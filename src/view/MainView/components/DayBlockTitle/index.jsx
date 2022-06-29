import styled from "styled-components";
import { colors, sizes } from "../../../../common/styles";
const DayBlockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  background-color: ${colors.primaryBackground};
  border-bottom: 2px solid ${colors.mainBorderColor};
  border-radius: ${props => props.borderRadius};
`;

const Title = styled.p`
  color: ${colors.fourColor};
  text-transform: uppercase;
  font-size: ${sizes.mediumFontSize};
  font-weight: bold;
`;

const DayBlockTitle = ({ borderRadius, day }) => {
  return (
    <DayBlockContainer borderRadius={borderRadius}>
      <Title>day {day}</Title>
    </DayBlockContainer>
  );
};

export default DayBlockTitle;
