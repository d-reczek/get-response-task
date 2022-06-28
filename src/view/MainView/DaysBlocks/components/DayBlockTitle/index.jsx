import styled from "styled-components";
import { colors, sizes } from "../../../../../common/styles";
const DayBlockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  background-color: ${colors.primaryBackground};
  border-bottom: 2px solid ${colors.dayBlockBorderColor};
`;

const Title = styled.p`
  color: ${colors.secondaryColor};
  text-transform: uppercase;
  font-size: ${sizes.mediumFontSize};
`;

const DayBlockTitle = () => {
  return (
    <DayBlockContainer>
      <Title>day 04</Title>
    </DayBlockContainer>
  );
};

export default DayBlockTitle;
