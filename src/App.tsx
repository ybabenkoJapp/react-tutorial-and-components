import * as React from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { MyThemeProvider } from "./buildInHooks/ThemeContext";
import ThemedButton from "./components/ThemedButton";
import { green, red } from "@mui/material/colors";
import { Button } from "@mui/material";
import BasicButton from "./components/BasicButton";
import MuiComponentModifier from "./components/MuiComponentModifier";
import { useState } from "react";
// import { deepmerge } from "@mui/utils"; // commented for a while

// logic in app.tsx - should be moved to a custom context
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
export default function App() {
  const [myTheme, setMyTheme] = useState<MyCustomTheme>({
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
    type MyObjectStyleChanger = {
      type: "sizeChange" | "colorChange";
      value: string;
    };

    let output;

    if (
      typeof theme === "object" &&
      theme !== null &&
      Object.keys(theme).length > 0
    ) {
      const myObjectStyleChanger = theme as MyObjectStyleChanger;

      switch (myObjectStyleChanger.type) {
        case "sizeChange": {
          output = {
            components: {
              // Name of the component
              MuiButton: {
                styleOverrides: {
                  // Name of the slot
                  root: {
                    // Some CSS
                    size: myObjectStyleChanger.value,
                    // backgroundColor: "#121212",
                    variants: [
                      {
                        props: { variant: "outlined" },
                        style: {
                          // size: theme,
                          color: "#121212",
                        },
                      },
                    ],
                  },
                },
              },
            },
          };
          break;
        }
        case "colorChange": {
          output = {
            components: {
              // Name of the component
              MuiButton: {
                styleOverrides: {
                  // Name of the slot
                  root: {
                    // Some CSS
                    backgroundColor: "#121212",
                    color: myObjectStyleChanger.value,
                    variants: [
                      {
                        props: { variant: "outlined" },
                        style: {},
                      },
                    ],
                  },
                },
              },
            },
          };
          break;
        }
        default:
          console.log("Unknown type");
          break;
      }

      if (output && Object.keys(output).length > 0) {
        setMyTheme({
          ...myTheme,
          components: {
            ...myTheme.components,
            ...output.components,
          },
        });
      }
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
