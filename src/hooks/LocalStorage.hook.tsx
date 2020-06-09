import { useContext, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";
export const useLocalStorage = () => {
  const { todos } = useContext(TodoContext);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);
};
