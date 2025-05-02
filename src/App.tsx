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
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <MyThemeProvider>
          <ThemedButton />
        </MyThemeProvider>
        <BasicUseEffectExample userId={1} />
      </ThemeProvider>
    </div>
  );
}
