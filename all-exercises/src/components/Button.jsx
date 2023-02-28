import { useEffect, useState } from "react";
import { useResizeHandler } from "./Resize";
export default function Button({ text }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [bgcolor, setBgcolor] = useState("blue");
  // const colors = ["red", "blue", "green", "yellow", "purple"];
  // now with function
  const isSmall = useResizeHandler();
  // function onWidthChange() {
  //     //  when resize, change width
  //     setWidth(window.innerWidth * 0.8);
  //     // setBgcolor(colors[Math.floor(Math.random() * colors.length)]);
  // }
  // useEffect(() => {
  //     // listen to resize
  //     window.addEventListener('resize', onWidthChange);
  //     return () => {
  //         //  clear event listeners
  //         window.removeEventListener('resize', onWidthChange);
  //     };
  // }, []);
  return (
    <button style={{ backgroundColor: isSmall ? "red" : "blue", width }}>
      {text}
    </button>
  );
}
