import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import "./components/Button.css";

function App() {
  return (
    <div>
      <Button className="bold" title="important"></Button>
      <Button title="not important"></Button>
    </div>
  );
}

export default App;
