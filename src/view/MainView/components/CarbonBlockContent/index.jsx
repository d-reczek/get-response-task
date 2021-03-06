import styled from "styled-components";
import { device } from "../../../../common/deviceBreakPoints";
import { colors, sizes } from "../../../../common/styles";
const CarbonBlockContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 37px;
  background-color: ${colors.thirdColor};
  border-bottom: 2px solid ${colors.mainBorderColor};
`;

const Title = styled.p`
  color: ${colors.primaryColor};
  text-transform: uppercase;
  font-size: ${sizes.smallFontSize};
  @media ${device.mobile} {
    font-size: 8px;
    text-align: center;
  }
`;
const CarbonBlockContent = ({ title }) => {
  return (
    <CarbonBlockContentContainer>
      <Title>{title}</Title>
    </CarbonBlockContentContainer>
  );
};

export default CarbonBlockContent;
