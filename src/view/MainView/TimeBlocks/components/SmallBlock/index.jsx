import styled from "styled-components";
import { sizes, colors } from "../../../../../common/styles";

const SmallBlockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
  height: 91px;
  background-color: ${colors.thirdColor};
  border-bottom: 2px solid ${colors.mainBorderColor};
`;
const TextContainer = styled.div`
  display: flex;
  margin: 40px 0;
  font-size: ${sizes.smallFontSize};
`;
const Span = styled.span`
  font-weight: bold;
`;

const SmallBlock = ({ time, timeTag, position }) => {
  return (
    <SmallBlockContainer position={position}>
      <TextContainer>
        <p>
          <Span>{time}</Span> {timeTag}
        </p>
      </TextContainer>
    </SmallBlockContainer>
  );
};

export default SmallBlock;
