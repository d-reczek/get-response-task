import { Icon } from "@mui/material";
import styled from "styled-components";
import { colors } from "../../../../../common/styles";
const DayBlockFreeContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 460px;
  background-color: ${colors.primaryBackground};
  border-bottom: 2px solid ${colors.mainBorderColor};
`;

const TitleConatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  color: ${colors.primaryColor};
  text-transform: uppercase;
  font-size: 25px;
  transform: rotate(-90deg);
`;
const Title = styled.p`
  width: 200px;
`;
const DayBlockFreeContent = () => {
  return (
    <DayBlockFreeContentContainer>
      <TitleConatiner>
        <Icon sx={{ fontSize: "32px", transform: "rotate(90deg)" }}>
          tag_faces
        </Icon>
        <Title>guilt-free day</Title>
      </TitleConatiner>
    </DayBlockFreeContentContainer>
  );
};

export default DayBlockFreeContent;
