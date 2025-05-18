import { createContext } from "react";
// import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

interface MyCustomTheme {
  palette: {
    primary: {
      main: string;
    };
  };
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          variants: {
            props: { variant: string };
            style: Record<string, unknown>;
          }[];
        };
      };
    };
  };
}

export const MyThemeContext = createContext({
  palette: {
    primary: {
      main: red[500],
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // fontSize: "5rem",
          variants: [
            {
              props: { variant: "outlined" },
              style: {
                // borderWidth: "31px",
              },
            },
          ],
        },
      },
    },
  },
}); // here we create a context with a default value of 1