import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function Header() {
  const themeContext = useContext(ThemeContext);
  let style = {};

  if (themeContext.theme === "dark") {
    style = {
      backgroundColor: "black",
      color: "white",
    };
  } else {
    style = {
      backgroundColor: "grey",
      color: "black",
    };
  }

  return (
    <div style={style}>
      Header <hr />
    </div>
  );
}
