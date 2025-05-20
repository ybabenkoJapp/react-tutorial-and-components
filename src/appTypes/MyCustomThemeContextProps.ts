import MyCustomTheme from "./MyCustomTheme";
import { MuiElementColor, MuiElementSize } from "./utilityTypes";

export default interface MyCustomThemeContextProps {
  theme: MyCustomTheme;
  setTheme: (theme: MyCustomTheme) => void;
  updateThemeSettings: (newThemeSettings: Partial<MyCustomTheme>) => void;
  handleComponentSizeChange: (componentName: string, newSize: MuiElementSize) => void;
  handleComponentColorChange: (componentName: string, newColor: MuiElementColor) => void;
}