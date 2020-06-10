import { Empty, List } from "antd";
import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import { useLocalStorage } from "../../hooks/LocalStorage.hook";
import { TodoEdit } from "./TodoEdit";
import { HelperFooter, HelperHeader } from "./TodoHelpers";
import { TodoItem } from "./TodoItem";
import { TodoRemove } from "./TodoRemove";
import { FrownOutlined } from "@ant-design/icons";
import { sort } from "../../helpers/functions";

export const TodoList = () => {
  const {
    todos,
    handlerAllCompleted,
    onRemoveAllTodos,
    handlerChouseTodo,
    handlerCompleted,
    handlerDetail,
  } = useContext(TodoContext);
  const [order, setOrder] = useState("DESC");
  useLocalStorage();

  const handleClickList = (elem: React.MouseEvent<HTMLElement>) => {
    const target = elem.target as HTMLElement;

    let id: string | null | number = target.getAttribute("data-id");
    const who = target.getAttribute("data-who");

    if (!id) return false;
    id = parseInt(id);
    switch (who) {
      case "title":
        handlerChouseTodo(id);
        handlerDetail();
        break;
      case "checkbox":
        handlerCompleted(id);
        break;
      default:
        break;
    }
  };

  return todos.length > 0 ? (
    <div onClick={handleClickList}>
      <List
        itemLayout="horizontal"
        className="todo-list"
        dataSource={sort(todos, order)}
        header={
          todos.length > 2 && (
            <HelperHeader
              todos={todos}
              handlerAllCompleted={handlerAllCompleted}
              onRemoveAllTodos={onRemoveAllTodos}
              handleChangeOrder={setOrder}
            />
          )
        }
        footer={<HelperFooter todos={todos} />}
        bordered
        renderItem={(item) => (
          <List.Item
            actions={[<TodoEdit id={item.id} />, <TodoRemove id={item.id} />]}
          >
            <TodoItem todo={item} />
          </List.Item>
        )}
      />
    </div>
  ) : (
    <Empty
      description="Пока нет задач"
      image={<FrownOutlined style={{ fontSize: 90 }} />}
    />
  );
};
