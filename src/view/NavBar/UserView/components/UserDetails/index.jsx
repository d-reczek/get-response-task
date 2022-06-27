import styled from "styled-components";
import { colors } from "../../../../../common/styles";
const UserDetailsContainer = styled.div`
  align-self: flex-start;
  margin-top: 10px;
`;

const SelectUserDetails = styled.select`
  border: none;
  font-size: 12px;
  color: ${colors.navFontColor};
`;

const UserDetails = ({ userName }) => {
  return (
    <UserDetailsContainer>
      <SelectUserDetails>
        <option>{userName}</option>
      </SelectUserDetails>
    </UserDetailsContainer>
  );
};

export default UserDetails;
