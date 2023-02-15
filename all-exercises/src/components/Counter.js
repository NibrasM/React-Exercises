import { useEffect, useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);
  const [colorb, setColor] = useState("blue");

  useEffect(() => {
    if (value > 0) setColor("green");
    if (value == 0) setColor("blue");
    if (value < 0) setColor("red");
  });
  const handelClick1 = () => {
    if (value < 10) {
      setValue(value + 1);
    } else if (value > 10) {
      setValue(10);
    }
  };

  const handelClick2 = () => {
    if (value > -10) {
      setValue(value - 1);
    } else if (value < -10) {
      setValue(-10);
    }
  };
  return (
    <div>
      <button onClick={handelClick1}>increment</button>
      <button onClick={handelClick2}>decrement</button>
      <label style={{ color: colorb }}> label 1: {value}</label>
    </div>
  );
}

export default Counter;
