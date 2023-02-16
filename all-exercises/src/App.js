import logo from "./logo.svg";
import "./App.css";
import ShowFrom from "./components/ShowForm";
import ShowFormResult from "./components/ShowFormResult";
import { useState } from "react";
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const firstNameHandler = (value) => {
    setFirstName(value);
  };

  const lastNameHandler = (value) => {
    setLastName(value);
  };

  const ageHandler = (value) => {
    setAge(value);
  };

  const textHandler = (value) => {
    setText(value);
  };

  const submittedHandler = (value) => {
    setSubmitted(value);
  };
  return (
    <div>
      {!submitted ? (
        <ShowFrom
          firstNameHandler={firstNameHandler}
          lastNameHandler={lastNameHandler}
          ageHandler={ageHandler}
          textHandler={textHandler}
          submittedHandler={submittedHandler}
        ></ShowFrom>
      ) : (
        <ShowFormResult
          submittedHandler={submittedHandler}
          firstName={firstName}
          lastName={lastName}
          age={age}
          text={text}
        ></ShowFormResult>
      )}
    </div>
  );
}

export default App;
