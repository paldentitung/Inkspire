import { Children, createContext } from "react";
export const ModeContext = createContext();
import { useState } from "react";
export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(true);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};
