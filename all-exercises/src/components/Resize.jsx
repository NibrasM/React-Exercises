import { useEffect, useState } from "react";

export function useResizeHandler() {
  const [isSmall, setIsSmall] = useState(true);
  const colors = ["red", "blue", "green", "yellow", "purple"];
  function onWidthChange() {
    //  when resize, change width
    const newSize = window.innerWidth;
    if (newSize < 500) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
    // setColorFn(colors[Math.floor(Math.random() * colors.length)]);
  }
  useEffect(() => {
    // listen to resize
    window.addEventListener("resize", onWidthChange);
    return () => {
      //  clear event listeners
      window.removeEventListener("resize", onWidthChange);
    };
  }, []);
  return isSmall;
}
