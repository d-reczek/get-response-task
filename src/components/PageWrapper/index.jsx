import styled from "styled-components";
import { device } from "../../common/deviceBreakPoints";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 978px;
  padding: 0 23px;
  @media ${device.tablet} {
    /* max-width: 100%; */
  }
`;
const PageWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageWrapper;
