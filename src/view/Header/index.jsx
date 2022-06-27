import styled from "styled-components";
import ProgresBar from "./ProgressBar";

const HeaderContainer = styled.header`
  margin-top: 32px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <ProgresBar />
    </HeaderContainer>
  );
};

export default Header;
