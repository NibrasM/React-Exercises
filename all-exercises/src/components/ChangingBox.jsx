import { useState } from "react";
import { useEffect } from "react";
import "./ChangingBox.css";

export default function ChangingBox() {
  const [cls1, setCls1] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setCls1("box1");
    }, 1000);
  });
  return (
    <div>
      <div className={cls1}></div>
    </div>
  );
}
