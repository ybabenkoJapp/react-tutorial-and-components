// commented due code merging start 

// import { Theme } from "@mui/material";
// import { MuiElementSize, MuiElementColor } from "./utilityTypes";
// import ButtonStyleConfig from "./ButtonStyleConfig";

// export default interface MyCustomThemeContextInterface {
//   myCustomTheme: Theme;
//   setMyCustomTheme: React.Dispatch<React.SetStateAction<Theme>>;
//   updateMyCustomThemeSettings: (
//     newMyCustomThemeSettings: Partial<Theme>,
//   ) => void;
//   componentSizeValue: MuiElementSize;
//   componentColorValue: MuiElementColor;
//   handleComponentSizeChange: (size: unknown) => void;
//   handleComponentColorChange: (color: unknown) => void;
//   themeContext?: any;
//   buttonConfig?: any;
//   updateButtonConfig?: (newConfig: Partial<ButtonStyleConfig>) => void;
// }

// commented due code merging end 

// new code start 
import { Theme } from "@mui/material";
import { MuiElementColor, MuiElementSize } from "./utilityTypes";
import ButtonStyleConfig from "./ButtonStyleConfig"; // Переконайтеся, що цей імпорт правильний

interface MyCustomThemeContextInterface {
  myCustomTheme: Theme;
  setMyCustomTheme: (theme: Theme) => void;
  updateMyCustomThemeSettings: (newMyCustomThemeSettings: Partial<Theme>) => void;
  componentSizeValue: MuiElementSize;
  componentColorValue: MuiElementColor;
  handleComponentSizeChange: (size: unknown) => void;
  handleComponentColorChange: (color: unknown) => void;
  // --- НОВІ ВЛАСТИВОСТІ ДЛЯ ДИНАМІЧНОЇ КНОПКИ ---
  buttonConfig: ButtonStyleConfig;
  updateButtonConfig: (newConfig: Partial<ButtonStyleConfig>) => void;
}

export default MyCustomThemeContextInterface;

// new code end