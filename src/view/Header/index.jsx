import styled from "styled-components";
import ProgresBar from "./ProgressBar";
import Week from "./Week";

const HeaderContainer = styled.header`
  margin-top: 32px;
  display: flex;
`;
const weeks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
const Header = () => {
  return (
    <HeaderContainer>
      <ProgresBar weeks={weeks} />
      <Week />
    </HeaderContainer>
  );
};

export default Header;
