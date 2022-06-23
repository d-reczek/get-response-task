import styled from "styled-components";
import { colors } from "../../../../common/styles";
const UserDetailsContainer = styled.div`
  align-self: flex-start;
  margin-top: 10px;
`;

const SelectUserDetails = styled.select`
  border: none;
  font-size: 12px;
  color: ${colors.navFontColor};
`;

const UserDetails = () => {
  return (
    <UserDetailsContainer>
      <SelectUserDetails>
        <option>Olivia Wilde</option>
      </SelectUserDetails>
    </UserDetailsContainer>
  );
};

export default UserDetails;
