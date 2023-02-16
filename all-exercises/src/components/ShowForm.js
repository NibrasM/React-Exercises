import "./ShowForm.css";
import { useState } from "react";
function ShowFrom(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [text, setText] = useState("");

  const firstNameHandler = (event) => {
    props.firstNameHandler(event.target.value);
  };

  const lastNameHandler = (event) => {
    props.lastNameHandler(event.target.value);
  };

  const ageHandler = (event) => {
    props.ageHandler(event.target.value);
  };

  const textHandler = (event) => {
    props.textHandler(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.submittedHandler(true);
  };
  const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div>
      <form className="col" onSubmit={submitHandler}>
        <label>
          First Name: <input type="text" onChange={firstNameHandler} />
        </label>

        <label>
          Last Name: <input type="text" onChange={lastNameHandler} />
        </label>

        <label>
          Age:
          <select value="0-15" onChange={ageHandler}>
            {a.map((res) => {
              return (
                <option key={res} value={res}>
                  {res}
                </option>
              );
            })}
          </select>
        </label>

        <label>
          Free Text: <textarea onChange={textHandler} />{" "}
        </label>

        <button type="submit">Continue</button>
      </form>
    </div>
  );
}

export default ShowFrom;
