import { createTheme } from "@mui/material";
import ButtonStyleConfig from "../appTypes/ButtonStyleConfig";

export const createDynamicTheme = (config: ButtonStyleConfig) => {
  return createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            backgroundColor: config.backgroundColor,
            color: config.textColor,
            borderRadius: config.borderRadius,
            padding: config.padding,
            fontSize: config.fontSize,
            boxShadow: config.boxShadow,
            '&:hover': {
              backgroundColor: config.hoverColor,
              // Additional styles on hover, for example:
              // boxShadow: config.hoverBoxShadow,
            },
          },
        },
      },
      // Here can be the rest components
    },
    // The rest theme settings as typography, palette .etc
  });
};