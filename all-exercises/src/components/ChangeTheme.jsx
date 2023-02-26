import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function ChangeTheme() {
  const themeContext = useContext(ThemeContext);

  console.log(themeContext);
  return (
    <>
      current theme : {themeContext.theme}
      <button onClick={themeContext.ToggleTheme}>Change Theme</button>
    </>
  );
}
