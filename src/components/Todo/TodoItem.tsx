import { Checkbox } from "antd";
import React from "react";
import { ITodo } from "../../context/todoReducer";

type ProfileProps = {
  todo: ITodo;
};

export const TodoItem: React.FC<ProfileProps> = ({ todo }) => {
  const classes = ["todo"];

  if (todo.completed) {
    classes.push("todo_completed");
  }

  return (
    <div className={classes.join(" ")}>
      <Checkbox
        data-id={todo.id}
        data-who="checkbox"
        checked={todo.completed}
        className="todo__status"
      />

      <div className="todo__title" data-id={todo.id} data-who="title">
        {todo.title}
      </div>
    </div>
  );
};
