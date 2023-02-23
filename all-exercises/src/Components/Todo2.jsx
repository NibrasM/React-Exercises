import { useState, useRef, useEffect } from "react";

function Todo2() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("array")));
  const name = useRef();
  console.log(name);
  const ToAddHandel = (e) => {
    e.preventDefault();
    setTasks([...tasks, { name: name.current.value, completed: false }]);
    name.current.value = "";
  };

  console.log(typeof data);
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("array", JSON.stringify(tasks));
    }
  }, [tasks]);
  const changeCompleted = (task) => {
    setTasks((prevTasks) => {
      const index = prevTasks.findIndex((obj) => obj.name === task.name);
      console.log(index);
      const newArray = [...prevTasks];
      newArray[index] = { ...newArray[index], completed: !task.completed };
      return newArray;
    });
    localStorage.setItem("array", JSON.stringify(tasks));
  };

  const drawTasks = () => {
    return tasks.map((task, i) => {
      return (
        <>
          <ul>
            <span style={{ margin: "40px 20px" }}>{task.name}</span>
            {task.completed ? (
              <span onClick={() => changeCompleted(task)}>V</span>
            ) : (
              <span onClick={() => changeCompleted(task)}>X</span>
            )}
            <span style={{ margin: "10px 20px" }}>{task.completed}</span>
          </ul>
        </>
      );
    });
  };
  console.log(tasks);

  return (
    <>
      <h1> To do list </h1>
      <form onSubmit={ToAddHandel}>
        <label> Add To do</label>
        <input
          type="text"
          ref={name}
          //   onChange={(e) => setName(e.target.value)}
        />
        <button type="submit"> Add</button>
      </form>
      {/* i want to print the data in list  */}
      <ul>{drawTasks()}</ul>
    </>
  );
}
export default Todo2;
