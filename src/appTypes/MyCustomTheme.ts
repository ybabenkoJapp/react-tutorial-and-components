import { MuiElementColor, MuiElementSize } from "./utilityTypes";
import { Theme } from "@mui/material";

export default interface MyCustomTheme extends Theme {
  components: {
    MuiButton: {
      defaultProps: {
        size?: MuiElementSize;
        color?: MuiElementColor;
      };
      styleOverrides?: {
        root?: {
        };
      };
    };
  };
}