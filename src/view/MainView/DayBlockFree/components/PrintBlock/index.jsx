import { Icon } from "@mui/material";
import styled from "styled-components";
import { colors, sizes } from "../../../../../common/styles";
const PrintBlockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 78px;
  background-color: ${colors.thirdColor};
  border-radius: 0 0 ${sizes.primaryBorderRadius} 0;
`;
const Title = styled.p`
  color: ${colors.primaryColor};
  margin-left: 13px;
  font-size: 13x;
`;
const PrintBlock = () => {
  return (
    <PrintBlockContainer>
      <Icon sx={{ fontSize: "23px" }}>print</Icon> <Title>Print</Title>
    </PrintBlockContainer>
  );
};

export default PrintBlock;
