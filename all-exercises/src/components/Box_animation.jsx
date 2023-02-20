import { useState } from "react";
import { useEffect } from "react";
import "./Box_animation.css";

export default function Box_animation() {
  const [cls, setCls] = useState("box1");
  useEffect(() => {
    setTimeout(() => {
      setCls("box");
    }, 1000);
  });
  return <div className={cls}></div>;
}
