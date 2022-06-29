import styled from "styled-components";
const FooterBlockElementContainer = styled.div`
  /* height: 178px; */
  margin-top: 40px;
  border-right: ${props => props.borderRight};
  padding-left: ${props => props.paddingLeft};
  padding-right: 80px;
  padding-bottom: 15px;
  padding-right: ${props => props.paddingRight};
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
