import React from "react";
import { createContext } from "react";
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const theme = {
    colors: {
      primary: "#3B82F6",
      secondary: "#F9FAFB",
      text: "#111827",
    },
  };
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
