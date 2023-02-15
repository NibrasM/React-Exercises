import logo from "./logo.svg";
import "./App.css";
import CustomButton from "./components/CustomButton";
import { useState } from "react";

function App() {
  const [clickedButton, setClickedButton] = useState("");

  const setButton = (clicked) => {
    setClickedButton(clicked);
  };

  const colors = ["blue", "red", "yellow"];
  return (
    <div>
      <>
        {colors.map((colorVal) => {
          return (
            <CustomButton
              color={colorVal}
              key={colorVal}
              updateTextCallBack={setButton}
            ></CustomButton>
          );
        })}
      </>
      <h1>The Color selected is: {clickedButton}</h1>
    </div>
  );
}

export default App;
