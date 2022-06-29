import styled from "styled-components";
import { colors } from "../../../../common/styles";
const FooterBlockElementContainer = styled.div`
  width: 305px;
  /* height: 178px; */
  margin-top: 40px;
  border-right: ${props => props.borderRight};
  padding-left: ${props => props.paddingLeft};
  padding-right: 40px;
  padding-bottom: 15px;
`;
const FooterBlockElement = ({ children, borderRight, paddingLeft }) => {
  return (
    <FooterBlockElementContainer
      paddingLeft={paddingLeft}
      borderRight={borderRight}>
      {children}
    </FooterBlockElementContainer>
  );
};

export default FooterBlockElement;
