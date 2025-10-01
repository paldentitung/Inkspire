import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ModeContext } from "./Context/ModeContext.jsx";
import { ThemeContext } from "./Context/ThemeContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ModeContext>
        <ThemeContext>
          <App />
        </ThemeContext>
      </ModeContext>
    </BrowserRouter>
  </StrictMode>
);
