import * as React from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { MyThemeProvider } from "./buildInHooks/ThemeContext";
import ThemedButton from "./components/ThemedButton";
import BasicUseEffectExample from "./buildInHooks/BasicUseEffectExample";
import { green, red } from "@mui/material/colors";
import { Button } from "@mui/material";
import BasicButton from "./components/BasicButton";
import MuiComponentModifier from "./components/MuiComponentModifier";
import { useState } from "react";

export default function App() {
  const [myTheme, setMyTheme] = useState({
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
  });

  const theme = createTheme(myTheme);

  function onClickUpdateThemeHandler() {
    setMyTheme({
      ...myTheme,
      palette: {
        primary: {
          main: green[800],
        },
      },
    });
  }

  function onThemeChangeHandler(theme: unknown) {
    let output;

    if (theme) {
      output = {
        components: {
          // Name of the component
          MuiButton: {
            styleOverrides: {
              // Name of the slot
              root: {
                // Some CSS
                size: theme,
                // backgroundColor: "#121212",
                variants: [
                  {
                    props: { variant: "outlined" },
                    style: {
                      // borderWidth: "31px",
                      // size: theme,
                      color: "#121212",
                    },
                  },
                ],
              },
              // value: {
              //   color: "#121212",
              // },
              // unit: {
              //   color: "#888",
              // },
            },
          },
        },
      };

      setMyTheme({
        ...myTheme,
        ...output,
      });
    }
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <MyThemeProvider>
          <ThemedButton />
          <Button variant="text" onClick={onClickUpdateThemeHandler}>
            Text
          </Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <MuiComponentModifier
            onThemeChange={onThemeChangeHandler}
            size="small"
          >
            <BasicButton variant="contained" children="My contained" />
          </MuiComponentModifier>
        </MyThemeProvider>
      </ThemeProvider>
    </div>
  );
}
