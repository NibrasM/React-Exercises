import React, { useEffect } from "react";
import Son from "./Son";
import { useContext } from "react";
import { GiftConetext } from "./Grandfather";
function Father() {
  const giftContext = useContext(GiftConetext);

  useEffect(() => {
    giftContext.setGiftsArr(["A", "B", "C"]);
  }, []);
  return (
    <div>
      <Son />
    </div>
  );
}

export default Father;
