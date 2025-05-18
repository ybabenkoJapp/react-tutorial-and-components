import * as React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ToggleButtomThemeContext";

const useTheme = () => useContext(ThemeContext);

export default useTheme;
