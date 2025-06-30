import "./App.css";
import MyCustomThemeWrapper from "./themeWrappers/MyCustomThemeWrapper";
import MyCustomThemeMainComponent from "./components/MyCustomThemeMainComponent";

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
