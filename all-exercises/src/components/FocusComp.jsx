import { useEffect } from "react";
import { useRef } from "react";

export default function FocusComp() {
  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus();
  }, []);
  return (
    <div>
      <form>
        <label>Enter name</label>
        <input ref={inputFocus} type="text" />
      </form>
    </div>
  );
}
