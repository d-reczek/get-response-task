import { Icon } from "@mui/material";
import styled from "styled-components";
import { device } from "../../../../../common/deviceBreakPoints";
import { colors, sizes } from "../../../../../common/styles";
const PrintBlockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 78px;
  background-color: ${colors.thirdColor};
  border-radius: 0 0 ${sizes.primaryBorderRadius} 0;
  cursor: pointer;
`;
const Title = styled.p`
  color: ${colors.primaryColor};
  margin-left: 13px;
  font-size: 13x;
  @media ${device.tabletXL} {
    display: none;
  }
`;
const PrintBlock = () => {
  return (
    <PrintBlockContainer>
      <Icon
        sx={{
          fontSize: "23px",
          filter:
            "invert(74%) sepia(6%) saturate(27%) hue-rotate(69deg) brightness(99%) contrast(95%)",
          ":hover": { color: colors.secondaryColor },
        }}>
        print
      </Icon>
      <Title>Print</Title>
    </PrintBlockContainer>
  );
};

export default PrintBlock;
