import { createContext } from "react";
import { IStateReducer, ITodo } from "./todoReducer";
import { checkLocalStorage, getLocalStorage } from "../helpers/functions";

interface IState extends IStateReducer {
  addTodo: (todo: ITodo) => void;
  updateTodo: (todo: ITodo) => void;
  handlerChouseTodo: (id: number) => ITodo | void;
  handlerCompleted: (id: number) => void;
  handlerAllCompleted: () => void;
  handlerDetail: () => void;
  handlerEditTodo: () => void;
  onRemoveAllTodos: () => void;
  toggleEdit: () => void;
  removeTodo: (id: number) => void;
}

export const initialState = {
  todos: [],
  editTodo: false,
  showDetail: false,
  idChouseTodo: null,
  addTodo: () => {},
  handlerDetail: () => {},
  handlerEditTodo: () => {},
  updateTodo: () => {},
  onRemoveAllTodos: () => {},
  handlerCompleted: () => {},
  handlerAllCompleted: () => {},
  handlerChouseTodo: () => {},
  toggleEdit: () => {},
  removeTodo: () => {},
};

if (checkLocalStorage) {
  const todoList = JSON.parse(getLocalStorage!);
  initialState.todos = todoList;
}

export const TodoContext = createContext<IState>(initialState);
