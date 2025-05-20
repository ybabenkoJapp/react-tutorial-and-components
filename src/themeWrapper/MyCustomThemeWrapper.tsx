import { red } from "@mui/material/colors";
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

  const updateThemeSettings = useCallback((newMyCustomThemeSettings: Partial<MyCustomTheme>) => {},[])
}
