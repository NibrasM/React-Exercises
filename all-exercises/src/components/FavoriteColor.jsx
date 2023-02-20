import { useEffect, useState } from "react";

export default function FavoriteColor() {
  const [favColor, setFavColor] = useState("green");

  useEffect(() => {
    setTimeout(() => {
      setFavColor("red");
    }, 1000);
  });
  return (
    <div>
      <h1 style={{ color: favColor }}>my favColor is {favColor}</h1>
      <div id="one"></div>
    </div>
  );
}
