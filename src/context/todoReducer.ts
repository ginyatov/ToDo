import {
  ALL_COMPLETED,
  EDIT_TODO,
  MODAL_DETAIL,
  MODAL_EDIT,
  UPDATE_TODO,
} from "./types";
import {
  ADD_TODO,
  REMOVE_TODO,
  CHOUSE_TODO,
  HANDLER_COMPLETED,
  REMOVE_ALL_TODO,
} from "./types";

export type ITodo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
};

export interface IStateReducer {
  todos: ITodo[];
  editTodo: boolean;
  showDetail: boolean;
  idChouseTodo: number | null;
}

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: ITodo;
}

interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: number;
}
interface DetalisTodoAction {
  type: typeof CHOUSE_TODO;
  payload: number | null;
}
interface EditTodoAction {
  type: typeof EDIT_TODO;
  payload?: undefined;
}

interface CompletedTodoAction {
  type: typeof HANDLER_COMPLETED;
  payload: number;
}

interface AllCompletedTodoAction {
  type: typeof ALL_COMPLETED;
  payload?: undefined;
}

interface HandlerModalAction {
  type: typeof MODAL_DETAIL;
  payload?: undefined;
}
interface HandlerEditAction {
  type: typeof MODAL_EDIT;
  payload?: undefined;
}

interface onUpdateAction {
  type: typeof UPDATE_TODO;
  payload: ITodo[];
}

interface onRemoveAllAction {
  type: typeof REMOVE_ALL_TODO;
  payload?: undefined;
}

type TodoActionTypes =
  | AddTodoAction
  | RemoveTodoAction
  | onRemoveAllAction
  | DetalisTodoAction
  | AllCompletedTodoAction
  | HandlerEditAction
  | EditTodoAction
  | HandlerModalAction
  | onUpdateAction
  | CompletedTodoAction;

export const todoReducer = (
  state: IStateReducer,
  { type, payload }: TodoActionTypes
): IStateReducer => {
  switch (type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, payload as ITodo] };
    case UPDATE_TODO:
      return {
        ...state,
        todos: payload as ITodo[],
      };
    case CHOUSE_TODO:
      return { ...state, idChouseTodo: payload as number | null };
    case EDIT_TODO:
      return { ...state, editTodo: !state.editTodo as boolean };
    case MODAL_DETAIL:
      return { ...state, showDetail: !state.showDetail };
    case MODAL_EDIT:
      return { ...state, editTodo: !state.editTodo };
    case ALL_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
      };
    case HANDLER_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === payload) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };

    case REMOVE_ALL_TODO:
      return {
        ...state,
        todos: [],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    default:
      return state;
  }
};
