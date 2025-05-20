import { MuiElementColor, MuiElementSize } from "./utilityTypes";

export default interface MyCustomTheme {
  palette: {
    primary: {
      main: string;
    };
    secondary?: {
      main: string;
    };
    success?: {
      main: string;
    };
    error?: {
      main: string;
    };
    info?: {
      main: string;
    };
    warning?: {
      main: string;
    };
  };
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