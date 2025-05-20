import { useContext } from "react";

const useMyCustomTheme = () => {
  const context = useContext({ theme: "MyCustomThemeContext test" });
  if (!context) {
    throw new Error("useMyCustomTheme must be used within a MyCustomThemeProvider");
  }
  return context;
};
