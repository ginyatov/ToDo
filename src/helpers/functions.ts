import { ITodo } from "../context/todoReducer";

export const getLocalStorage = localStorage.getItem("todoList");

export const sort = (todos: ITodo[], orderType: string) => {
  switch (orderType) {
    case "ASC":
      return todos.sort((a: ITodo, b: ITodo) => {
        let titleA = a.title.toLowerCase(),
          titleB = b.title.toLowerCase();
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        return 0;
      });
    case "DESC":
      return todos.sort((a: ITodo, b: ITodo) => {
        let titleA = a.title.toLowerCase(),
          titleB = b.title.toLowerCase();
        if (titleA < titleB) return 1;
        if (titleA > titleB) return -1;
        return 0;
      });

    default:
      console.log("Ошибка в сортировке");
      return [];
  }
};

export const fakeDuration = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });

export const completedTodo = (todos: ITodo[]) =>
  todos.reduce((acc, todo) => acc + (todo.completed ? 1 : 0), 0);

export const allCompleted = (todos: ITodo[]) =>
  completedTodo(todos) === todos.length;

export const checkLocalStorage =
  !!getLocalStorage && !!JSON.parse(getLocalStorage || "")?.length;
