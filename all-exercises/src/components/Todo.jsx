import React, { Component } from "react";

export default class Todo extends Component {
  state = {
    tasks: [
      { name: "CSS", completed: true },
      { name: "JavaScript", completed: true },
      { name: "Learn React", completed: false },
      { name: "Learn mongoDB", completed: false },
      { name: "Learn Node JS", completed: false },
    ],
  };

  handelClick = (index) => {
    const newTasks = [...this.state.tasks];
    newTasks[index].completed = !newTasks[index].completed;
    this.setState({ tasks: newTasks });

    console.log("yes");
  };
  render() {
    const viewTasks = this.state.tasks.map((task, index) => {
      return (
        <div
          key={index}
          style={{ display: "flex" }}
          onClick={() => this.handelClick(index)}
        >
          <p
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {" "}
            {task.name}
          </p>
          <p>: {task.completed ? " \u2713" : " X"}</p>
        </div>
      );
    });
    return (
      <div>
        Todo
        {viewTasks}
      </div>
    );
  }
}
