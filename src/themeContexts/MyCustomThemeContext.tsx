import { createContext } from "react";
import MyCustomThemeContext from "../appTypes/MyCustomThemeContextInterface";

export const MyCustomThemeContext = createContext<
  MyCustomThemeContext | undefined
>(undefined);
