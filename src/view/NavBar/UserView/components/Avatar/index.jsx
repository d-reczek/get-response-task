import styled from "styled-components";
import { boxShadow } from "../../../../../common/styles";
const AvatarContainer = styled.div``;
const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  box-shadow: ${boxShadow.mainBoxShadow};
`;
const Avatar = ({ avatarImg }) => {
  return (
    <AvatarContainer>
      <Img src={avatarImg} alt="avatar"></Img>
    </AvatarContainer>
  );
};

export default Avatar;
