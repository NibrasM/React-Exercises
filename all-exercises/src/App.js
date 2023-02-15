import logo from "./logo.svg";
import "./App.css";

function App() {
  const data = ["hello", "world"];
  const a = data[0].charAt(0).toUpperCase() + data[0].slice(1);
  const b = data[1].charAt(0).toUpperCase() + data[1].slice(1);
  const number1 = 5;
  const number2 = 6;
  const string = "I love React!";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Me
        </a>

        <p>
          A. {a} {b}
        </p>

        <p>B. {number1 + number2}</p>

        <p>C. The string's length is {string.length}</p>
      </header>
    </div>
  );
}

export default App;
