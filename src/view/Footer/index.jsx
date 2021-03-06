import { Icon } from "@mui/material";
import styled from "styled-components";
import { device } from "../../common/deviceBreakPoints";
import { colors, sizes } from "../../common/styles";
import FooterBlockElement from "./components/FooterBlockElement";
import FooterButton from "./components/FooterButton";
const FooterContainer = styled.footer`
  display: flex;
  background-color: ${colors.footerBackground};
  margin-bottom: 4px;
  @media ${device.tabletXL} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Heder = styled.h3`
  color: ${colors.primaryColor};
  font-size: ${sizes.largeFontSize};
  font-weight: bold;
  padding-bottom: 20px;
  @media ${device.tabletXL} {
    padding: 0;
  }
`;
const Paragraph = styled.p`
  color: ${colors.primaryColor};
  font-size: ${sizes.smallFontSize};
  padding-bottom: 20px;
  @media ${device.tabletXL} {
    padding: 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;
const Footer = () => {
  const footerBlockElementStyles = {
    borderRight: `1px solid ${colors.mainBorderColor}`,
    paddingLeft: "40px",
  };

  return (
    <FooterContainer>
      <FooterBlockElement borderRight={footerBlockElementStyles.borderRight}>
        <Heder>Running out of products?</Heder>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          sapiente!
        </Paragraph>
        <FooterButton>
          Buy now
          <Icon sx={{ fontSize: "10px", marginLeft: "8px" }}>
            arrow_forward_ios_icon
          </Icon>
        </FooterButton>
      </FooterBlockElement>
      <FooterBlockElement
        borderRight={footerBlockElementStyles.borderRight}
        paddingLeft={footerBlockElementStyles.paddingLeft}
        paddingRight="100px">
        <Heder>
          Bode Trainer in <br />
          your pocket
        </Heder>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          sapiente!
        </Paragraph>
        <ButtonContainer>
          <FooterButton>
            <Icon sx={{ fontSize: "20px", marginRight: "8px" }}>apple</Icon>
            IOS
            <Icon sx={{ fontSize: "10px", marginLeft: "8px" }}>
              arrow_forward_ios_icon
            </Icon>
          </FooterButton>
          <FooterButton>
            <Icon sx={{ fontSize: "20px", marginRight: "8px" }}>adb</Icon>
            Android
            <Icon sx={{ fontSize: "10px", marginLeft: "8px" }}>
              arrow_forward_ios_icon
            </Icon>
          </FooterButton>
        </ButtonContainer>
      </FooterBlockElement>
      <FooterBlockElement
        paddingRight="10px"
        paddingLeft={footerBlockElementStyles.paddingLeft}>
        <Heder>Frequently Asked Questions</Heder>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          sapiente!
        </Paragraph>
        <FooterButton>
          Read FAQs
          <Icon sx={{ fontSize: "10px", marginLeft: "8px" }}>
            arrow_forward_ios_icon
          </Icon>
        </FooterButton>
      </FooterBlockElement>
    </FooterContainer>
  );
};

export default Footer;
