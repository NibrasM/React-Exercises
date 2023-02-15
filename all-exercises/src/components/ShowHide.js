import "./ShowHide.css";
import { useState } from "react";
function ShowHide() {
  const [visible, setVisibility] = useState(true);

  const handelClick = () => {
    setVisibility((current) => !current);
  };
  return (
    <div>
      <button onClick={handelClick}>Show/Hide</button>
      <div
        className="yellow-box"
        style={{ display: visible ? "block" : "none" }}
      ></div>
    </div>
  );
}

export default ShowHide;
