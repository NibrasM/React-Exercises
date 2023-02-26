import React, { useState } from "react";
import Father from "./Father";
import { createContext } from "react";
export const GiftConetext = createContext();

function Grandfather() {
  const [giftsArr, setGiftsArr] = useState([]);

  return (
    <div>
      <GiftConetext.Provider value={{ giftsArr, setGiftsArr }}>
        <Father />
      </GiftConetext.Provider>
    </div>
  );
}

export default Grandfather;
