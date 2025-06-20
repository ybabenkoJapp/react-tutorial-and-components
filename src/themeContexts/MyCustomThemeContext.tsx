import { createContext } from "react";
import MyCustomThemeContextInterface from "../appTypes/MyCustomThemeContextInterface";

export const MyCustomThemeContext = createContext<
  MyCustomThemeContextInterface | undefined
>(undefined);
