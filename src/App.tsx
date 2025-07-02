import "./App.css";
import MyCustomThemeWrapper from "./themeWrappers/MyCustomThemeWrapper";
import MyCustomThemeMainComponent from "./components/MyCustomThemeMainComponent";

export default function App() {
  return (
    <MyCustomThemeWrapper>
      <MyCustomThemeMainComponent />
    </MyCustomThemeWrapper>
  );
}
