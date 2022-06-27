import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import "./MuiStepLabel-label.css";
import { colors } from "../../../../../common/styles";

const ColorlibConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 4,
    left: -13,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: colors.progressActive,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: colors.progressCompleted,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 2,
    width: 20,
    border: 0,
    backgroundColor: colors.progressActive,
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor: colors.progressActive,
  zIndex: 1,
  width: 10,
  height: 10,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: colors.primaryBackground,
    border: `2px solid ${colors.progressActive}`,
  }),
  ...(ownerState.completed && {
    backgroundColor: colors.progressCompleted,
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}></ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

// const steps = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const ProgressLine = ({ weeks }) => {
  return (
    <Stack sx={{ width: "230px", margin: "14px 0" }} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={4}
        connector={<ColorlibConnector />}>
        {weeks.map(label => (
          <Step sx={{ padding: "0px" }} key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};
export default ProgressLine;
