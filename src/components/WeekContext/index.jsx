import { useState } from "react";
import { createContext } from "react";

export const WeekContex = createContext(null);

const WeekContexProvider = ({ children }) => {
  const [week, setWeek] = useState(1);

  return (
    <WeekContex.Provider value={{ week, setWeek }}>
      {children}
    </WeekContex.Provider>
  );
};

export default WeekContexProvider;
