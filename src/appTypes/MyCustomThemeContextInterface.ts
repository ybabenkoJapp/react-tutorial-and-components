import { Theme } from "@mui/material";
import { MuiElementSize, MuiElementColor } from "./utilityTypes";

export default interface MyCustomThemeContextInterface {
  myCustomTheme: Theme;
  setMyCustomTheme: React.Dispatch<React.SetStateAction<Theme>>;
  updateMyCustomThemeSettings: (
    newMyCustomThemeSettings: Partial<Theme>,
  ) => void;
  componentSizeValue: MuiElementSize;
  componentColorValue: MuiElementColor;
  handleComponentSizeChange: (size: unknown) => void;
  handleComponentColorChange: (color: unknown) => void;
}