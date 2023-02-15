import { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        increment
      </button>
      <label>{value}</label>
    </div>
  );
}

export default Counter;
