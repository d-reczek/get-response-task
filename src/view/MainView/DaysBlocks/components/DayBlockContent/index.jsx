import styled from "styled-components";
import { colors } from "../../../../../common/styles";
const DayBlockContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 92px;
  background-color: ${colors.primaryBackground};
  border-bottom: ${props => props.border};
  border-right: ${props => props.border};
`;

const Title = styled.p`
  color: ${colors.secondaryColor};
  text-transform: uppercase;
`;

const DayBlockContent = ({ border }) => {
  return (
    <DayBlockContentContainer border={border}>
      <Title>Test</Title>
    </DayBlockContentContainer>
  );
};

export default DayBlockContent;
