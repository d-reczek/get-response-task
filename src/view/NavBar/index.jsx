import styled from "styled-components";
import { colors } from "../../common/styles";
import { boxShadow } from "../../common/styles";
import UserView from "./UserView";
const NavigationWrapper = styled.div`
  background-color: ${colors.primaryBackground};
  box-shadow: ${boxShadow.mainBoxShadow};
`;
const Navigation = styled.nav`
  max-width: 978px;
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
  flex-wrap: wrap;
  gap: 30px;
  border-left: 2px solid ${colors.navBorderColor};
  margin-left: 120px;
  padding-left: 30px;
`;
const NavigationListElement = styled.li``;
const NavigationListElementUserView = styled.li`
  margin-left: auto;
`;

const NavigationListLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: ${colors.primaryColor};
  :hover {
    color: ${colors.secondaryColor};
    border-bottom: 1px solid;
  }
`;
const navigationLinks = [
  { name: "dasboard", path: "#" },
  { name: "recipes", path: "#" },
  { name: "challenge", path: "#" },
];
const NavBar = () => {
  return (
    <NavigationWrapper>
      <Navigation>
        <NavigationList>
          {navigationLinks.map(link => (
            <NavigationListElement key={link.name}>
              <NavigationListLink href={link.path}>
                {link.name}
              </NavigationListLink>
            </NavigationListElement>
          ))}
          <NavigationListElementUserView>
            <UserView />
          </NavigationListElementUserView>
        </NavigationList>
      </Navigation>
    </NavigationWrapper>
  );
};

export default NavBar;
