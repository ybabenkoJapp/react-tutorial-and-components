import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ToggleButtomThemeContext } from "./buildInHooks/ToggleButtomThemeContext";
import ThemedButton from "./components/ThemedButton";
import { Button } from "@mui/material";
import BasicButton from "./components/BasicButton";
import MuiComponentModifier from "./components/MuiComponentModifier";
// import { deepmerge } from "@mui/utils"; // commented for a while

// logic in app.tsx - should be moved to a custom context
export default function App() {
  return (
    <div>
      <ToggleButtomThemeContext>
        <ThemedButton />
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <MuiComponentModifier>
          <BasicButton variant="contained" children="My contained" />
          <Button variant="outlined" children="My outlined" />
          <Button variant="text" children="My text" />
        </MuiComponentModifier>
      </ToggleButtomThemeContext>
    </div>
  );
}
