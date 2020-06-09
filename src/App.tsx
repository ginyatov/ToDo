import React from "react";
import TodoForm from "./components/Todo/TodoForm";
import { Typography } from "antd";
import { TodoList } from "./components/Todo/TodoList";

export const App = () => {
  return (
    <div className="container">
      <Typography.Title className="main-title">
        TODO для компании - <b>Wiley</b>
      </Typography.Title>
      <TodoForm />
      <TodoList />
    </div>
  );
};
