import "./Spinner.css";
import { useRef, useEffect } from "react";
import { useState } from "react";
export default function Spinner() {
  const loading = useRef(null);

  const spinners = ["loader1", "loader2", "loader3"];

  let rand = Math.floor(Math.random() * 3);

  const [cls, setCls] = useState(spinners[rand]);

  useEffect(() => {
    setTimeout(() => {
      loading.current.classList.remove(cls);
    }, 5000);
  }, []);
  return (
    <div>
      <div ref={loading} className={cls}></div>
    </div>
  );
}
