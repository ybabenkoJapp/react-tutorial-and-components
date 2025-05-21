import { useContext } from "react";
import { ThemeContext } from "../themeContexts/ThemeContext";

const useTheme = () => useContext(ThemeContext);

export default useTheme;
