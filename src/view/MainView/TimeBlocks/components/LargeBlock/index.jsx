import styled from "styled-components";
import { colors, sizes } from "../../../../../common/styles";
const LargeBlockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${props => props.position};
  height: ${props => props.height};
  background-color: ${colors.thirdColor};
  border-bottom: 2px solid ${colors.mainBorderColor};
  border-radius: ${props => props.borderRadius};
`;
const TextContainer = styled.div`
  display: flex;
  margin: 40px 0;
  font-size: ${sizes.smallFontSize};
`;
const Span = styled.span`
  font-weight: bold;
`;

const LargeBlock = ({ time, timeTag, position, borderRadius, height }) => {
  return (
    <LargeBlockContainer
      height={height}
      borderRadius={borderRadius}
      position={position}>
      <TextContainer>
        <p>
          <Span>{time}</Span> {timeTag}
        </p>
      </TextContainer>
    </LargeBlockContainer>
  );
};

export default LargeBlock;
