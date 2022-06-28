import { Button, Icon } from "@mui/material";
import { colors } from "../../../../../common/styles";

const ChangeWeekButton = ({ type, handleClick }) => {
  return (
    <Button
      onClick={handleClick}
      sx={{
        padding: "0",
        minWidth: "25px",
        height: "42px",
        backgroundColor: colors.primaryBackground,
        textAlign: "center",
        border: `1px solid ${colors.primaryColor}`,
      }}
      variant="text">
      <Icon
        sx={{
          color: colors.primaryColor,
          width: "12px",
          fontSize: "16px",
        }}>
        arrow_{type}_ios
      </Icon>
    </Button>
  );
};

export default ChangeWeekButton;
