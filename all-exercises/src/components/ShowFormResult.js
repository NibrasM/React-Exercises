import React from "react";

function ShowFormResult(props) {
  const back = () => {
    props.submittedHandler(false);
  };
  return (
    <div>
      <label> {props.firstName}</label>
      <label> {props.lastName}</label>
      <label> {props.age}</label>
      <label> {props.text}</label>
      <button onClick={back}>Back</button>
      <button>Send Survey</button>
    </div>
  );
}
export default ShowFormResult;
