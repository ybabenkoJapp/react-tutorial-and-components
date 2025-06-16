import { useContext } from "react";
import { MyCustomThemeContext } from "../themeContexts/MyCustomThemeContext";

export const useMyCustomTheme = () => {
  const context = useContext(MyCustomThemeContext);
  if (!context) {
    throw new Error("useMyCustomTheme must be used within a MyCustomThemeProvider");
  }
  return context;
};
