import Avatar from "./components/Avatar";
import styled from "styled-components";
import UserDetails from "./components/UserDetails";
import avatarImg from "./img/avatar.png";
const UserViewContainer = styled.div`
  justify-self: flex-end;
  display: flex;
  align-items: center;
`;

const user = {
  name: "Olivia Wilde",
  avatar: avatarImg,
};

const UserView = () => {
  return (
    <UserViewContainer>
      <Avatar avatarImg={user.avatar} />
      <UserDetails userName={user.name} />
    </UserViewContainer>
  );
};

export default UserView;
