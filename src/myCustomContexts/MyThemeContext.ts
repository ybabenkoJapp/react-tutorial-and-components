import { createContext } from "react";
// import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material";

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

const defaultTheme = createTheme({
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
})

export const MyThemeContext = createContext({ myCustomTheme: defaultTheme, setTheme: () => { }, updateThemeSettings: () => { } }); // here we create a context with a default value of 1