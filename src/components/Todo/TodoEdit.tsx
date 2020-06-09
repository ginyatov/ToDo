import { EditOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
interface Props {
  id: number;
}

export const TodoEdit = ({ id }: Props) => {
  const { handlerChouseTodo, handlerEditTodo } = useContext(TodoContext);
  return (
    <EditOutlined
      onClick={() => {
        handlerChouseTodo(id);
        handlerEditTodo();
      }}
    />
  );
};
