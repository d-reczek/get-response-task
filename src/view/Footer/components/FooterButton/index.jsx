import styled from "styled-components";
import { colors, sizes } from "../../../../common/styles";

const Button = styled.button`
  color: ${colors.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primaryBackground};
  border: 1px solid ${colors.primaryColor};
  border-radius: 5px;
  height: 33px;
  font-size: ${sizes.smallFontSize};
  cursor: pointer;
  :hover {
    background-color: ${colors.secondaryColor};
    color: #fff;
  }
`;
const FooterButton = ({ children }) => {
  return <Button>{children}</Button>;
};

export default FooterButton;
