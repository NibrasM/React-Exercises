import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function Login() {
  const themeContext = useContext(ThemeContext);
  // let style = {}

  // if(themeContext.theme === "dark"){
  //     style ={
  //         backgroundColor: "blue",
  //         color:"white"
  //     }
  // } else{
  //     style ={
  //         backgroundColor: "white",
  //         color:"blue"
  //     }
  // }

  return (
    <div
      style={{
        backgroundColor: themeContext.theme === "dark" ? "black" : "grey",
        color: themeContext.theme === "dark" ? "white" : "black",
      }}
    >
      Login <hr />
    </div>
  );
}
