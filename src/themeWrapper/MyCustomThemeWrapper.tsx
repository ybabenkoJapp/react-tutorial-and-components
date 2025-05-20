import { blue, green, grey, orange, red, yellow } from "@mui/material/colors";
import MyCustomTheme from "../appTypes/MyCustomTheme";
import { createContext, use, useCallback, useState } from "react";
import { MuiElementColor, MuiElementSize } from "../appTypes/utilityTypes";

const initialTheme: MyCustomTheme = {
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

export default function MyCustomThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [myCustomTheme, setMyCustomTheme] =
    useState<MyCustomTheme>(initialTheme);
  const [componentSizeValue, setComponentSizeValue] =
    useState<MuiElementSize>("small");
  const [componentColorValue, setComponentColorValue] =
    useState<MuiElementColor>("primary");

  const myCustomThemeContext = createContext<MyCustomTheme | undefined>(
    undefined,
  );

  function undateMyCustomThemeElementProperty(
    property: unknown,
    type: "color" | "size",
  ) {
    if (type === "color") {
      setComponentColorValue(property as MuiElementColor);
    } else if (type === "size") {
      setComponentSizeValue(property as MuiElementSize);
    }

    switch (type) {
      case "color": {
        const color = property as MuiElementColor;
        const colorMap = {
          primary: red[500],
          secondary: orange[500],
          success: green[500],
          error: red[500],
          info: blue[500],
          warning: yellow[700],
          inherit: grey[500],
        };
        setComponentColorValue(color);

        updateThemeSettings({
          palette: {
            primary: {
              main: colorMap[color] || red[500], // Default to red if color is not found
            },
          },
          components: {
            MuiButton: {
              defaultProps: {
                color: color,
              },
            },
          },
        });
      }
      default: {
        setComponentSizeValue(property as MuiElementSize);
        updateThemeSettings({
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

  const handleComponentSizeChange = useCallback(() => {}, []);
  const handleComponentColorChange = useCallback(() => {}, []);

  const updateThemeSettings = useCallback(
    (newMyCustomThemeSettings: Partial<MyCustomTheme>) => {},
    [],
  );
}
