import { useState } from "react";
import { useEffect } from "react";

export default function CustomButton(props) {
  const handelClick = (e) => {
    props.updateTextCallBack(e.target.innerText);
  };

  return (
    <button
      style={{
        backgroundColor: props.color,
      }}
      onClick={handelClick}
    >
      {props.color}
    </button>
  );
}
