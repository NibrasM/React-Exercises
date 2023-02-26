import { createContext, useState } from "react";
export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [theme, setTheme] = useState("dark");
  const ToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme, ToggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
