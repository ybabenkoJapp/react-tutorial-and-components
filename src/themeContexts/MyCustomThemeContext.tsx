import { createContext } from "react";
import MyCustomTheme from "../appTypes/MyCustomTheme";

export const MyCustomThemeContext = createContext<MyCustomTheme | undefined>(
    undefined,
  );