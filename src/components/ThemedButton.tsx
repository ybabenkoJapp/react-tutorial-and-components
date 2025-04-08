import { ThemeContext } from "./../buildInHooks/ThemeContext";
import * as React from "react";
import { useContext } from "react";
import useTheme from "../buildInHooks/useTheme";

export default function ThemedButton() {
  const themeContext = useContext(ThemeContext);
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => toggleTheme}
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      Змінити тему на {theme === "light" ? "темну" : "світлу"}
    </button>
  );
}
