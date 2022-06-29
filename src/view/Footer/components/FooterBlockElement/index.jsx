import styled from "styled-components";
import { device } from "../../../../common/deviceBreakPoints";
import { colors } from "../../../../common/styles";
const FooterBlockElementContainer = styled.div`
  /* height: 178px; */
  margin-top: 40px;
  border-right: ${props => props.borderRight};
  padding-left: ${props => props.paddingLeft};
  padding-right: 80px;
  padding-bottom: 15px;
  padding-right: ${props => props.paddingRight};
  @media ${device.tabletXL} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 30px;
    border-right: none;
    border: 1px solid ${colors.mainBorderColor};
    width: 100%;
  }
`;
const FooterBlockElement = ({
  children,
  borderRight,
  paddingLeft,
  paddingRight,
}) => {
  return (
    <FooterBlockElementContainer
      paddingRight={paddingRight}
      paddingLeft={paddingLeft}
      borderRight={borderRight}>
      {children}
    </FooterBlockElementContainer>
  );
};

export default FooterBlockElement;
