function setMyTheme(obj: unknown) {
  if (!obj) {
    return {};
  }

  if (typeof obj !== "object") {
    return obj;
  }

  return obj
}

export function onClickUpdateThemeHandler() {
  setMyTheme({
    palette: {
      primary: {
      },
    },
  });
}

export function onThemeChangeHandler(theme: unknown) {
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
        components: {
          ...output.components,
        },
      });
    }
  }
}