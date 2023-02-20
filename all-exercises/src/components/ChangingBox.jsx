import { useState } from "react";
import { useEffect } from "react";
import "./ChangingBox.css";

export default function ChangingBox() {
  const [cls1, setCls1] = useState("");
  const [counter, setCounter] = useState(0);

  const colors = ["red", "green", "blue", "yellow", "plum"];

  const change = (color) => {
    setCls1(color);
  };
  useEffect(() => {
    setTimeout(() => {
      change(colors[counter]);
      setCounter(counter + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (counter < colors.length) {
        change(colors[counter]);
        setCounter(counter + 1);
      }
      if (counter == colors.length) {
        change("circle");
      }
    }, 1000);
  }, [cls1]);

  return (
    <div>
      <div className={cls1}></div>
    </div>
  );
}
