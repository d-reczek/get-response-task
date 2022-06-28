import styled from "styled-components";
import { colors } from "../../common/styles";
const FooterContainer = styled.footer`
  background-color: ${colors.footerBackground};
`;

const Footer = () => {
  return <FooterContainer>Footer</FooterContainer>;
};

export default Footer;
