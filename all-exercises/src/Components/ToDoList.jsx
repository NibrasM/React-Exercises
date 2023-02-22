import { useEffect } from "react";
import { useState, useRef } from "react";

export default function ToDoList() {
  const [task, setTask] = useState({});
  const [listOfTasks, setListofTasks] = useState([]);
  const inputRef = useRef(null);
  const array = [];

  useEffect(() => {
    console.log("yes nibras ", task);
    setListofTasks(...listOfTasks, task);
    console.log("uuuuuu ", listOfTasks);
  }, [task]);

  const addHandler = (e) => {
    e.preventDefault();
    const newTask = { task: inputRef.current.value, complete: false };
    setTask(newTask);
    array.push(newTask);
    console.log(array);
    // setListofTasks(...listOfTasks, newTask);
    // console.log(listOfTasks);
  };
  return (
    <div>
      <h1> To Do List</h1>
      <form onSubmit={addHandler}>
        <label> Add To Do: </label> <input ref={inputRef} type="text" />{" "}
        <button type="submit">Add</button>
        <ol>
          <li>yes</li>
          <li>No</li>
        </ol>
      </form>
    </div>
  );
}
