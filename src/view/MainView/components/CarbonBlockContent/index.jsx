import styled from "styled-components";
import { colors, sizes } from "../../../../common/styles";
const CarbonBlockContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 37px;
  background-color: ${colors.thirdColor};
  border-bottom: 2px solid ${colors.mainBorderColor};
  /* border-right: 2px solid ${colors.mainBorderColor}; */
`;

const Title = styled.p`
  color: ${colors.primaryColor};
  text-transform: uppercase;
  font-size: ${sizes.smallFontSize};
`;

const CarbonBlockContent = () => {
  return (
    <CarbonBlockContentContainer>
      <Title>low-carbon</Title>
    </CarbonBlockContentContainer>
  );
};

export default CarbonBlockContent;
