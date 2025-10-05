import React, { useContext } from "react";

import { ModeContext } from "../Context/ModeContext";
import { ThemeContext } from "../Context/ThemeContext";
const Button = ({ name }) => {
  const { mode } = useContext(ModeContext); // currently unused
  const { colors } = useContext(ThemeContext);
  const { primary, color } = colors;

  return (
    <button
      style={{ background: primary }}
      className="px-8 py-2 shadow-md rounded-md transition-all duration-300 hover:cursor-pointer hover:opacity-90 text-white"
    >
      {name}
    </button>
  );
};

export default Button;
