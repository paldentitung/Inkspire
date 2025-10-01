import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ModeProvider } from "./Context/ModeContext.jsx";
import { ThemeProvider } from "./Context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ModeProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ModeProvider>
    </BrowserRouter>
  </StrictMode>
);
