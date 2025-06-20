import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { MyThemeProvider } from "./themeContexts/ThemeContext";
import ThemedButton from "./components/ThemedButton";
import { red } from "@mui/material/colors";
import MyCustomThemeWrapper from "./themeWrappers/MyCustomThemeWrapper";
import { Button } from "@mui/material";
import MyTestComponent from "./components/MyTestComponent";
import ThemeSettingsPanel from "./components/ThemeSettingsPanel";
import { useState } from "react";
import ButtonStyleConfig from "./appTypes/ButtonStyleConfig";
import { createDynamicTheme } from "./muiTheme/dynamicTheme";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

const buttonConfig: ButtonStyleConfig = {
    backgroundColor: "#1976d2", // MUI primary.main by default
    textColor: "#FFFFFF",
    hoverColor: "#115293", // primary.dark
    borderRadius: "4px",
    padding: "6px 16px",
    fontSize: "0.875rem",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
  };

const MyCustomThemeMainComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const dynamicTheme = createDynamicTheme(buttonConfig);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
  return (
    <ThemeProvider theme={dynamicTheme}>
      <div>Hello from App component!</div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "purple",
          "&:hover": { backgroundColor: "darkmagenta" },
        }}
        onClick={toggleDrawer(true)}
      >
        Contained
      </Button>
      <ThemeSettingsPanel open={drawerOpen} onClose={toggleDrawer(false)} />
      <MyTestComponent>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </MyTestComponent>
      <div>
        <ThemeProvider theme={theme}>
          <MyThemeProvider>
            <ThemedButton />
          </MyThemeProvider>
        </ThemeProvider>
        <Button variant="contained" onClick={toggleDrawer(true)}>
          Contained
        </Button>
        <ThemeSettingsPanel open={drawerOpen} onClose={toggleDrawer(false)} />
      </div>
    </ThemeProvider>
  );
};

export default function App() {
  // TODO state management
  // Extend logic for designed theme
  // Think about extending setting logic for the rest components
  // Drag and drop event handling
  // Advanced topic Import to file theme settings
 
  return (
    <MyCustomThemeWrapper>
      <MyCustomThemeMainComponent />
    </MyCustomThemeWrapper>
  );
}
