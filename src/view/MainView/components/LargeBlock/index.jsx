import styled from "styled-components";
import { colors } from "../../../../common/styles";

const LargeBlockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${props => props.position};
  height: 143px;
  background-color: ${colors.thirdColor};
  border-bottom: 2px solid ${colors.mainBorderColor};
`;
const TextContainer = styled.div`
  display: flex;
  margin: 40px 0;
`;
const Span = styled.span`
  font-weight: bold;
`;

const LargeBlock = ({ time, timeTag, position }) => {
  return (
    <LargeBlockContainer position={position}>
      <TextContainer>
        <Span>{time}</Span> <p>{timeTag}</p>
      </TextContainer>
    </LargeBlockContainer>
  );
};

export default LargeBlock;
