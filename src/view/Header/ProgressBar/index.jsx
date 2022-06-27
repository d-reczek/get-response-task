import styled from "styled-components";
import { colors } from "../../../common/styles";
import ProgressLine from "./components/ProgressLine";

const ProgressBarContainer = styled.div`
  margin: 0;
  width: 230px;
`;

const ProgressTitle = styled.p`
  color: ${colors.progressActive};
  font-size: 14px;
  text-transform: uppercase;
  margin-left: 5px;
`;

const ProgresBar = ({ weeks }) => {
  return (
    <ProgressBarContainer>
      <ProgressTitle>Your 12 weeks progress</ProgressTitle>
      <ProgressLine weeks={weeks} />
    </ProgressBarContainer>
  );
};

export default ProgresBar;
