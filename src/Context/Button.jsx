import React, { useContext } from "react";
import { ModeContext } from "./ModeContext";
import { ThemeContext } from "./ThemeContext";

const Button = ({ name }) => {
  const { mode } = useContext(ModeContext); // currently unused
  const { colors } = useContext(ThemeContext);
  const { primary, color } = colors;

  return (
    <button
      style={{ background: primary }}
      className="px-8 py-2 shadow-md rounded-md transition-all duration-300 hover:cursor-pointer hover:opacity-90"
    >
      {name}
    </button>
  );
};

export default Button;
