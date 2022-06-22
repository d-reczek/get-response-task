import styled from "styled-components";
import { colors } from "../../common/styles";
const NavigationWrapper = styled.div`
  background-color: #fff;
  /* padding-left: 120px; */
`;
const Navigation = styled.nav`
  width: 978px;
  margin: 0 auto;
  padding: 0 23px;
`;
const NavigationList = styled.ul`
  height: 80px;

  text-decoration: none;
  list-style-type: none;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 30px;
  border-left: 2px solid #efefef;
  margin-left: 120px;
  padding-left: 30px;
`;
const NavigationListElement = styled.li``;

const NavigationListLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: ${colors.navBtn};
  :hover {
    color: ${colors.navBtnHover};
    border-bottom: 1px solid;
  }
`;
const NavBar = () => {
  return (
    <NavigationWrapper>
      <Navigation>
        <NavigationList>
          <NavigationListElement>
            <NavigationListLink href="#">Dasboard</NavigationListLink>
          </NavigationListElement>
          <NavigationListElement>
            <NavigationListLink href="#">recipes</NavigationListLink>
          </NavigationListElement>
          <NavigationListElement>
            <NavigationListLink href="#">challenge</NavigationListLink>
          </NavigationListElement>
        </NavigationList>
      </Navigation>
    </NavigationWrapper>
  );
};

export default NavBar;
