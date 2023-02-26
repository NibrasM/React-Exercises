import "./App.css";
import { createContext } from "react";
import Grandfather from "./components/Grandfather";

export const ColorContext = createContext();
const color = "red";

function App() {
  return (
    <div>
      <ColorContext.Provider value={color}>
        <Grandfather />
      </ColorContext.Provider>
    </div>
  );
}

export default App;
