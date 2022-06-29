import styled from "styled-components";
import { device } from "../../common/deviceBreakPoints";
import ProgresBar from "./ProgressBar";
import ProteinsOptions from "./ProteinsOptions";
import Week from "./Week";
const HeaderContainer = styled.header`
  margin-top: 32px;
  margin-bottom: 33px;
  display: flex;
  justify-content: space-between;
  @media ${device.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Header = () => {
  return (
    <HeaderContainer>
      <ProgresBar weeks={weeks} />
      <Week />
      <ProteinsOptions />
    </HeaderContainer>
  );
};

export default Header;
