import { MyCustomThemeProvider } from "../themeProviders/MyCustomThemeProvider";
import React from "react";

export default function MyCustomThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // Тепер MyCustomThemeProvider сам керує всіма станами теми
  // і передає об'єкт теми в MUI ThemeProvider всередині себе.
  // Цей компонент просто обгортає дочірні елементи.
  return (
    <MyCustomThemeProvider>
      {children}
    </MyCustomThemeProvider>
  );
}