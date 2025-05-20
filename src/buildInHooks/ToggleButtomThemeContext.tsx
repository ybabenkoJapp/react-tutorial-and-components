import * as React from "react";
import { createContext, useState } from "react";

interface ThemeContectType {
  theme: string;
  toggleTheme: (prevTheme: string) => void;
}

const defaultThemeContext: ThemeContectType = {
  theme: "light",
  toggleTheme: (prevTheme: string) => {},
};

export const ThemeContext =
  createContext<ThemeContectType>(defaultThemeContext);

export const ToggleButtomThemeContext = function ({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("light");

  function toggleTheme(prevTheme: string) {
    setTheme(prevTheme === "light" ? "dark" : "light");
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
