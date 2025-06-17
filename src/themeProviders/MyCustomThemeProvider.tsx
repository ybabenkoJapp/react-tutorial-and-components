import { ThemeProvider } from "@mui/material/styles";
import MyCustomTheme from "../appTypes/MyCustomTheme";
import { MyCustomThemeContext } from "../themeContexts/MyCustomThemeContext";
import MyCustomThemeContextInterface from "../appTypes/MyCustomThemeContextInterface";

export const MyCustomThemeProvider = function ({
  themeContext,
  theme,
  children,
}: {
  themeContext: MyCustomThemeContextInterface;
  theme: MyCustomTheme;
  children: React.ReactNode;
}) {
  return (
    <MyCustomThemeContext.Provider value={themeContext}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MyCustomThemeContext.Provider>
  );
};
