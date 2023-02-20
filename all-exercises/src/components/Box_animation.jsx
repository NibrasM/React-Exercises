import { useState } from "react";
import { useEffect } from "react";
import "./Box_animation.css";

export default function Box_animation() {
  const [cls1, setCls1] = useState("");
  const [cls2, setCls2] = useState("");
  const [cls3, setCls3] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setCls1("box1");
      setCls2("box2");
      setCls3("box3");
    }, 1000);
  });
  return (
    <div>
      <div className={cls1}></div>
      <div className={cls2}></div>
      <div className={cls3}></div>
    </div>
  );
}
