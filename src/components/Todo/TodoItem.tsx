import { Checkbox } from "antd";
import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { ITodo } from "../../context/todoReducer";

type ProfileProps = {
  todo: ITodo;
};

export const TodoItem: React.FC<ProfileProps> = ({ todo }) => {
  const { handlerChouseTodo, handlerCompleted, handlerDetail } = useContext(
    TodoContext
  );
  const classes = ["todo"];

  if (todo.completed) {
    classes.push("todo_completed");
  }

  return (
    <div className={classes.join(" ")}>
      <Checkbox
        onChange={() => handlerCompleted(todo.id)}
        checked={todo.completed}
        className="todo__status"
      />

      <div
        className="todo__title"
        onClick={() => {
          handlerChouseTodo(todo.id);
          handlerDetail();
        }}
      >
        {todo.title}
      </div>
    </div>
  );
};
