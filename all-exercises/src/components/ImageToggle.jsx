import coloredImg from "../images/img1.jpg";
import balckImg from "../images/img1-black.jpg";
import "./ImageToggle.css";
import { useRef } from "react";
export default function ImageToggle() {
  const imgRef = useRef(null);
  return (
    <div>
      <h1>My Img</h1>
      <img
        ref={imgRef}
        src={balckImg}
        onMouseEnter={() => (imgRef.current.src = coloredImg)}
        onMouseLeave={() => (imgRef.current.src = balckImg)}
      />
    </div>
  );
}
