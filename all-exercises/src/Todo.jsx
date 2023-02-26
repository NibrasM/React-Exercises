import React from "react";
import { ACTIONS } from "./App";
function Todo({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.complete ? "green" : "red" }}>
        {todo.name}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Done
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
        style={{ color: "red" }}
      >
        X
      </button>
    </div>
  );
}

export default Todo;
