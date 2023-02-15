import logo from "./logo.svg";
import "./App.css";
import CheckBoxForm from "./components/CeckBoxForm";

function App() {
  return (
    <div>
      <form>
        <label>
          {" "}
          <input type="checkbox" checked="true" /> I read term of the app
        </label>
        <label>
          {" "}
          <input type="checkbox" checked="true" /> I accept the term of the app
        </label>
        <label>
          {" "}
          <input type="checkbox" />I want to get the weekly news letter
        </label>
        <label>
          {" "}
          <input type="checkbox" />I want to get sales and offers
        </label>
      </form>
    </div>
  );
}

export default App;
