import { Theme } from "@mui/material";
import MyCustomTheme from "./MyCustomTheme";
import { MuiElementColor, MuiElementSize } from "./utilityTypes";

export default interface MyCustomThemeContextProps {
  theme: Theme;
  setTheme: (theme: MyCustomTheme) => void;
  setMyCustomTheme: React.Dispatch<React.SetStateAction<Theme>>;
  updateMyCustomThemeSettings: (newMyCustomThemeSettings: Partial<Theme>) => void;
  componentSizeValue: MuiElementSize;
  componentColorValue: MuiElementColor;
  handleComponentSizeChange: (size: MuiElementSize) => void;
  handleComponentColorChange: (color: MuiElementColor) => void;
}