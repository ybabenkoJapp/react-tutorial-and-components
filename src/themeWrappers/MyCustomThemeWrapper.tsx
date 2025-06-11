import { blue, green, grey, orange, red, yellow } from "@mui/material/colors";
import { useCallback, useMemo, useState } from "react";
import { MuiElementColor, MuiElementSize } from "../appTypes/utilityTypes";
import { createTheme, type Theme } from "@mui/material";
import { MyCustomThemeProvider } from "../themeProviders/MyCustomThemeProvider";

const initialTheme = {
  palette: {
    primary: {
      main: red[500],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: "small",
      },
    },
  },
};

const colorMap = {
  primary: red[500],
  secondary: orange[500],
  success: green[500],
  error: red[500],
  info: blue[500],
  warning: yellow[700],
  inherit: grey[500],
};

export default function MyCustomThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [myCustomTheme, setMyCustomTheme] = useState<Theme>(
    createTheme(initialTheme as Theme),
  );
  const [componentSizeValue, setComponentSizeValue] =
    useState<MuiElementSize>("small");
  const [componentColorValue, setComponentColorValue] =
    useState<MuiElementColor>("primary");

  const updateMyCustomThemeSettings = useCallback(
    (newMyCustomThemeSettings: Partial<Theme>) => {
      setMyCustomTheme((prevTheme) => {
        return createTheme({
          ...prevTheme,
          ...newMyCustomThemeSettings,
          palette: {
            ...(newMyCustomThemeSettings.palette || {}),
          },
          components: {
            ...(newMyCustomThemeSettings.components || {}),
          },
        });
      });
    },
    [componentSizeValue, componentColorValue],
  );

  function undateMyCustomThemeElementProperty(
    property: unknown,
    type: "color" | "size",
  ) {
    switch (type) {
      case "color": {
        const color = property as MuiElementColor;
      
        setComponentColorValue(color);

        updateMyCustomThemeSettings({
          palette: {
            primary: {
              main: colorMap[color] || red[500],
            },
          },
          components: {
            MuiButton: {
              defaultProps: {
                color: color,
                size: componentSizeValue,
              },
            },
          },
        });
        break;
      }
      default: {
        setComponentSizeValue(property as MuiElementSize);
        updateMyCustomThemeSettings({
          palette: {
            primary: {
              main: colorMap[componentColorValue] || red[500],
            },
          },
          components: {
            MuiButton: {
              defaultProps: {
                size: property as MuiElementSize,
              },
            },
          },
        });
      }
    }
  }

  const handleComponentSizeChange = useCallback(
    (size: unknown) => undateMyCustomThemeElementProperty(size, "size"),
    [updateMyCustomThemeSettings],
  );
  const handleComponentColorChange = useCallback(
    (color: unknown) => {
      undateMyCustomThemeElementProperty(color, "color");
    },
    [updateMyCustomThemeSettings],
  );

  const myCustomThemeContextValue = useMemo(
    () => ({
      myCustomTheme,
      setMyCustomTheme,
      updateMyCustomThemeSettings,
      componentSizeValue,
      componentColorValue,
      handleComponentSizeChange,
      handleComponentColorChange,
    }),
    [
      myCustomTheme,
      setMyCustomTheme,
      updateMyCustomThemeSettings,
      componentSizeValue,
      componentColorValue,
      handleComponentSizeChange,
      handleComponentColorChange,
    ],
  );

  return (
    <MyCustomThemeProvider
      themeContext={myCustomThemeContextValue}
      theme={myCustomTheme}
    >
      {children}
    </MyCustomThemeProvider>
  );
}
