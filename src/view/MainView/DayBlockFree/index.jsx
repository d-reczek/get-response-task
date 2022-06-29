import styled from "styled-components";
import { colors, sizes } from "../../../common/styles";
import DayBlockFreeContent from "./components/DayBlockFreeContent";
import PrintBlock from "./components/PrintBlock";

const DaysBlockFree = () => {
  return (
    <>
      <DayBlockFreeContent />
      <PrintBlock />
    </>
  );
};

export default DaysBlockFree;
