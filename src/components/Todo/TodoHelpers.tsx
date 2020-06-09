import React, { useState } from "react";
import { ITodo } from "../../context/todoReducer";
import { completedTodo, allCompleted } from "../../helpers/functions";
import { Button, Popconfirm, Select } from "antd";
import { SmileOutlined } from "@ant-design/icons";

type headerProps = {
  todos: ITodo[];
  handlerAllCompleted: () => void;
  handleChangeOrder: React.Dispatch<React.SetStateAction<string>>;
  onRemoveAllTodos: () => void;
};

export const HelperHeader: React.FC<headerProps> = ({
  todos,
  handlerAllCompleted,
  handleChangeOrder,
  onRemoveAllTodos,
}) => {
  const [visible, setVisible] = useState(false);
  const handleVisibleChange = (visible: boolean) => {
    setVisible(visible);
  };
  return (
    <div className="todo-helper__header">
      <Select
        className="todo-helper__select"
        defaultValue="По убыванию"
        style={{ width: 120 }}
        onChange={handleChangeOrder}
      >
        <Select.Option value="DESC">По убыванию</Select.Option>
        <Select.Option value="ASC">По возрастанию</Select.Option>
      </Select>
      <Button
        type="dashed"
        className="todo-helper__completedAll"
        onClick={() => handlerAllCompleted()}
        disabled={allCompleted(todos)}
      >
        Завершить все
      </Button>
      <Popconfirm
        title="Точно удалить?"
        visible={visible}
        onVisibleChange={handleVisibleChange}
        onConfirm={() => {
          onRemoveAllTodos();
        }}
        onCancel={() => setVisible(false)}
        okText="Да"
      >
        <Button type="link">Удалить все</Button>
      </Popconfirm>
    </div>
  );
};

type footerProps = {
  todos: ITodo[];
};

export const HelperFooter: React.FC<footerProps> = ({ todos }) => {
  return (
    <div className="todo-helper__footer">
      Выполнено: <b>{completedTodo(todos)}</b> из <b>{todos.length}</b>
      <br />
      {allCompleted(todos) && (
        <div className="todo-helper__goodJob">
          <SmileOutlined />
          <b>Я горжусь тобою!</b>
        </div>
      )}
    </div>
  );
};
