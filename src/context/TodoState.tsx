import React, { useReducer } from "react";
import { initialState, TodoContext } from "./TodoContext";
import { ITodo, todoReducer } from "./todoReducer";
import {
  ADD_TODO,
  REMOVE_TODO,
  CHOUSE_TODO,
  HANDLER_COMPLETED,
  MODAL_DETAIL,
} from "./types";
import { message } from "antd";
import {
  ALL_COMPLETED,
  EDIT_TODO,
  MODAL_EDIT,
  UPDATE_TODO,
  REMOVE_ALL_TODO,
} from "./types";

export const TodoState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (todo: ITodo) => dispatch({ type: ADD_TODO, payload: todo });
  const updateTodo = (todo: ITodo) => {
    const updateTodos = state.todos.map((todoArr) => {
      if (todoArr.id === todo.id) {
        return todo;
      }
      return todoArr;
    });
    return dispatch({ type: UPDATE_TODO, payload: updateTodos });
  };

  const handlerAllCompleted = () => dispatch({ type: ALL_COMPLETED });

  const toggleEdit = () => dispatch({ type: EDIT_TODO });

  const handlerDetail = () => dispatch({ type: MODAL_DETAIL });
  const handlerEditTodo = () => dispatch({ type: MODAL_EDIT });

  const onRemoveAllTodos = () => dispatch({ type: REMOVE_ALL_TODO });

  const handlerCompleted = (id: number) =>
    dispatch({ type: HANDLER_COMPLETED, payload: id });

  const handlerChouseTodo = (id: number | null) =>
    dispatch({ type: CHOUSE_TODO, payload: id });

  const removeTodo = (id: number) => {
    dispatch({
      type: REMOVE_TODO,
      payload: id,
    });
    message.success("Задача успешно удалена.");
  };
  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        editTodo: state.editTodo,
        idChouseTodo: state.idChouseTodo,
        showDetail: state.showDetail,
        handlerDetail,
        updateTodo,
        addTodo,
        handlerEditTodo,
        toggleEdit,
        handlerCompleted,
        handlerAllCompleted,
        onRemoveAllTodos,
        handlerChouseTodo,
        removeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
