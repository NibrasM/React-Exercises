import React from "react";
import { ThemeProvider } from "./components/ThemeContext";
import Header from "./components/Header";
import ChangeTheme from "./components/ChangeTheme";
import Login from "./components/Login";
export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <ChangeTheme />
      <Login />
    </ThemeProvider>
  );
}
