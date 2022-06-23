import Avatar from "./components/Avatar";
import avatar from "./img/avatar.png";
import styled from "styled-components";
import UserDetails from "./components/UserDetails";

const UserViewContainer = styled.div`
  justify-self: flex-end;
  display: flex;
  align-items: center;
`;
const UserView = () => {
  return (
    <UserViewContainer>
      <Avatar />
      <UserDetails />
    </UserViewContainer>
  );
};

export default UserView;
