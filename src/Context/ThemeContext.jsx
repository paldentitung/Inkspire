import React, { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const theme = {
    colors: {
      // Main colors
      primary: "#10B981", // Soft Green for links / main buttons
      secondary: "#F3F4F6", // Light gray background
      text: "#111827", // Dark text for readability

      // Secondary text / subheadings
      textSecondary: "#6B7280", // Medium gray for subtitles

      // Buttons
      buttonPrimary: "#10B981", // Green
      buttonPrimaryHover: "#059669", // Darker green on hover
      buttonSecondary: "#E5E7EB", // Light gray
      buttonSecondaryHover: "#D1D5DB", // Slightly darker gray
      buttonCTA: "#F59E0B", // Amber for call-to-action buttons
      buttonCTAHover: "#B45309", // Darker amber on hover

      // Highlight / interactive elements
      highlight: "#2563EB", // Muted blue for hover, highlights, or links

      // Backgrounds
      cardBackground: "#FFFFFF", // White for cards / panels
      sectionBackground: "#F9FAFB", // Lightest gray for sections
    },
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
